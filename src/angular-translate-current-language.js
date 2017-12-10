(function (angular) {
    /**
     * @ngdoc property
     * @name pascalprecht.translate.$translate#currentLanguage
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * A helper method to retrieve current language when using angular-translate (pascalprecht.translate).
     *
     * proposedLanguage() returns the language that is currently loading, otherwise undefined,
     * use() returns currently used language (if loaded), otherwise undefined.
     * In case both proposedLanguage() and use() fails fallback to language key stored in storage.
     * If all above fails return preferredLanguage(), aka default language.
     *
     * @return {string} current language key
     */

    angular.module("pascalprecht.translate")
        .decorator("$translate", $translateDecorator);

    $translateDecorator.$inject = [
        "$delegate"
    ];

    function $translateDecorator($delegate) {
        Object.defineProperty($delegate, "currentLanguage", {
            get: function () {
                return $delegate.proposedLanguage() || $delegate.use() || $delegate.storage().get($delegate.storageKey()) || $delegate.preferredLanguage();
            }
        });

        return $delegate;
    }

})(window.angular);
