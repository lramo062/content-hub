(ns ^:figwheel-no-load content-hub.dev
  (:require
    [content-hub.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
