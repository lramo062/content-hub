(ns content-hub.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent :refer [atom]]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [cljs-http.client :as http]
              [cljs.core.async :refer [<!]]))



;; -------------------------
;; Views

;; example app-state atom
(def app-state (atom {}))

;; example get request
(defonce get-json
  (go (let
          [response (<! (http/get "https://jsonplaceholder.typicode.com/todos/1"
                                 {:with-credentials? false
                                  :query-params {"since" 135}}))]
      (reset! app-state (:body response)))))

(defn home-page []
  [:div [:h2 "Welcome to content-hub"]
   [:div [:a {:href "/about"} "go to about page"]]])


;; displaying the get request data as a string
(defn about-page []
  [:div [:h2 "About content-hub"]
   [:div [:a {:href "/"} "go to the home page"]]
   [:div (str @app-state)]])


;; -------------------------
;; Routes

(defonce page (atom #'home-page))

(defn current-page []
  [:div [@page]])

(secretary/defroute "/" []
  (reset! page #'home-page))

(secretary/defroute "/about" []
  (reset! page #'about-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
