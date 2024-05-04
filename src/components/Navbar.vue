<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link
        :to="`/`"
        class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Jeles.com</span
        >
      </router-link>
      <div
        class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
        <!-- Language Dropdown -->
        <div class="relative" x-data="{ open: false }">
          <button
            type="button"
            @click="open = !open"
            class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            aria-haspopup="true"
            :aria-expanded="open ? 'true' : 'false'">
            <!-- Flag Icon -->
            <svg
              class="w-5 h-5 rounded-full me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 3900 3900">
              <!-- Flag SVG content -->
            </svg>
            <!-- Language Name -->
            {{ $t(currentLanguage) }}
          </button>
          <!-- Dropdown -->
          <div
            x-show="open"
            @click.away="open = false"
            class="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-md z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-dropdown-menu">
            <a
              href="#"
              v-for="(lang, index) in languages"
              :key="index"
              @click="setLanguage(lang)"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">
              <!-- Flag Icon -->
              <svg
                class="h-3.5 w-3.5 rounded-full me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                id="flag-icon"
                :data-id="lang.id"
                viewBox="0 0 512 512">
                <!-- Flag SVG content -->
              </svg>
              <!-- Language Name -->
              {{ $t(lang.name) }}
            </a>
          </div>
        </div>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-language">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <router-link
              :to="`/`"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
              >{{ $t("navbar.home") }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="$t('projects')"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("navbar.projects") }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="$t('photography')"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("navbar.photography") }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="$t('services')"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("navbar.services") }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="$t('contact')"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("navbar.contact") }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { id: "us", name: "en" },
        { id: "hu", name: "hu" },
        { id: "de", name: "de" },
        // Add more languages if needed
      ],
      currentLanguage: "en", // Default language
    };
  },
  methods: {
    setLanguage(lang) {
      this.currentLanguage = lang.name;
      this.$i18n.locale = lang.name;
    },
  },
};
</script>
