(ns content-hub.prod
  (:require [content-hub.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
