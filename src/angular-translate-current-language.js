(function (angular) {

    /**
     * @ngdoc overview
     * @name pascalprecht.translate.$translateCurrentLanguage
     *
     * @description
     * A helper method to retrieve current language when using angular-translate (pascalprecht.translate).
     *
     * proposedLanguage() returns the language that is currently loading, otherwise undefined,
     * use() returns currently used language (if loaded), otherwise undefined.
     * In case both proposedLanguage() and use() fails fallback to language key stored in storage.
     * If all above fails return preferredLanguage(), aka default language.
     */

    angular.module("pascalprecht.translate")
        .provider("$translateCurrentLanguage", $translateCurrentLanguageProvider);

    function $translateCurrentLanguageProvider() {
        this.$get = ["$translate", function ($translate) {
            return $translate.proposedLanguage() || $translate.use() || $translate.storage().get($translate.storageKey()) || $translate.preferredLanguage();
        }];
    }

})(window.angular);
