const MainTest = () => {
  return (
    <div>
      <>
        {/* Hero */}
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                Start your journey with{" "}
                <span className="text-blue-600">Preline</span>
              </h1>
              <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                Hand-picked professionals and expertly crafted components,
                designed for any kind of entrepreneur.
              </p>
              {/* Buttons */}
              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  href="#"
                >
                  Get started
                  <svg
                    className="w-2.5 h-2.5"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <a
                  className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                  href="#"
                >
                  Contact sales team
                </a>
              </div>
              {/* End Buttons */}
              {/* Review */}
              <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
                {/* Review */}
                <div className="py-5">
                  <div className="flex space-x-1">
                    <svg
                      className="h-4 w-4 text-gray-800 dark:text-gray-200"
                      width={51}
                      height={51}
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      className="h-4 w-4 text-gray-800 dark:text-gray-200"
                      width={51}
                      height={51}
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      className="h-4 w-4 text-gray-800 dark:text-gray-200"
                      width={51}
                      height={51}
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      className="h-4 w-4 text-gray-800 dark:text-gray-200"
                      width={51}
                      height={51}
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      className="h-4 w-4 text-gray-800 dark:text-gray-200"
                      width={51}
                      height={51}
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="mt-3 text-sm text-gray-800 dark:text-gray-200">
                    <span className="font-bold">4.6</span> /5 - from 12k reviews
                  </p>
                  <div className="mt-5">
                    {/* Star */}
                    <svg
                      className="h-auto w-16 text-gray-800 dark:text-white"
                      width={80}
                      height={27}
                      viewBox="0 0 80 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.558 9.74046H11.576V12.3752H17.9632C17.6438 16.0878 14.5301 17.7245 11.6159 17.7245C7.86341 17.7245 4.58995 14.7704 4.58995 10.6586C4.58995 6.62669 7.70373 3.51291 11.6159 3.51291C14.6498 3.51291 16.4063 5.42908 16.4063 5.42908L18.2426 3.51291C18.2426 3.51291 15.8474 0.878184 11.4961 0.878184C5.94724 0.838264 1.67578 5.50892 1.67578 10.5788C1.67578 15.5289 5.70772 20.3592 11.6558 20.3592C16.8854 20.3592 20.7177 16.8063 20.7177 11.4969C20.7177 10.3792 20.558 9.74046 20.558 9.74046Z"
                        fill="currentColor"
                      />
                      <path
                        d="M27.8621 7.78442C24.1894 7.78442 21.5547 10.6587 21.5547 14.012C21.5547 17.4451 24.1096 20.3593 27.9419 20.3593C31.415 20.3593 34.2094 17.7645 34.2094 14.0918C34.1695 9.94011 30.896 7.78442 27.8621 7.78442ZM27.902 10.2994C29.6984 10.2994 31.415 11.7764 31.415 14.0918C31.415 16.4072 29.7383 17.8842 27.902 17.8842C25.906 17.8842 24.3491 16.2874 24.3491 14.0519C24.3092 11.8962 25.8661 10.2994 27.902 10.2994Z"
                        fill="currentColor"
                      />
                      <path
                        d="M41.5964 7.78442C37.9238 7.78442 35.2891 10.6587 35.2891 14.012C35.2891 17.4451 37.844 20.3593 41.6763 20.3593C45.1493 20.3593 47.9438 17.7645 47.9438 14.0918C47.9038 9.94011 44.6304 7.78442 41.5964 7.78442ZM41.6364 10.2994C43.4328 10.2994 45.1493 11.7764 45.1493 14.0918C45.1493 16.4072 43.4727 17.8842 41.6364 17.8842C39.6404 17.8842 38.0835 16.2874 38.0835 14.0519C38.0436 11.8962 39.6004 10.2994 41.6364 10.2994Z"
                        fill="currentColor"
                      />
                      <path
                        d="M55.0475 7.82434C51.6543 7.82434 49.0195 10.7784 49.0195 14.0918C49.0195 17.8443 52.0934 20.3992 54.9676 20.3992C56.764 20.3992 57.6822 19.7205 58.4407 18.8822V20.1198C58.4407 22.2754 57.1233 23.5928 55.1273 23.5928C53.2111 23.5928 52.2531 22.1557 51.8938 21.3573L49.4587 22.3553C50.297 24.1517 52.0135 26.0279 55.0874 26.0279C58.4407 26.0279 60.9956 23.9122 60.9956 19.481V8.18362H58.3608V9.26147C57.6423 8.38322 56.5245 7.82434 55.0475 7.82434ZM55.287 10.2994C56.9237 10.2994 58.6403 11.7365 58.6403 14.1317C58.6403 16.6068 56.9636 17.9241 55.2471 17.9241C53.4507 17.9241 51.774 16.4471 51.774 14.1716C51.8139 11.6966 53.5305 10.2994 55.287 10.2994Z"
                        fill="currentColor"
                      />
                      <path
                        d="M72.8136 7.78442C69.62 7.78442 66.9453 10.2994 66.9453 14.0519C66.9453 18.004 69.9393 20.3593 73.093 20.3593C75.7278 20.3593 77.4044 18.8822 78.3625 17.6048L76.1669 16.1277C75.608 17.006 74.6499 17.8443 73.093 17.8443C71.3365 17.8443 70.5381 16.8862 70.0192 15.9281L78.4423 12.4152L78.0032 11.3772C77.1649 9.46107 75.2886 7.78442 72.8136 7.78442ZM72.8934 10.2196C74.0511 10.2196 74.8495 10.8184 75.2487 11.5768L69.6599 13.9321C69.3405 12.0958 71.097 10.2196 72.8934 10.2196Z"
                        fill="currentColor"
                      />
                      <path
                        d="M62.9531 19.9999H65.7076V1.47693H62.9531V19.9999Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Star */}
                  </div>
                </div>
                {/* End Review */}
                {/* Review */}
                <div className="py-5">
                  <div className="flex space-x-1">
                    <svg
                      className="h-4 w-4 text-gray-800 dark:text-gray-200"
                      width={51}
                      height={51}
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      className="h-4 w-4 text-gray-800 dark:text-gray-200"
                      width={51}
                      height={51}
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      className="h-4 w-4 text-gray-800 dark:text-gray-200"
                      width={51}
                      height={51}
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      className="h-4 w-4 text-gray-800 dark:text-gray-200"
                      width={51}
                      height={51}
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      className="h-4 w-4 text-gray-800 dark:text-gray-200"
                      width={51}
                      height={51}
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z"
                        fill="transparent"
                      />
                      <path
                        d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="mt-3 text-sm text-gray-800 dark:text-gray-200">
                    <span className="font-bold">4.8</span> /5 - from 5k reviews
                  </p>
                  <div className="mt-5">
                    {/* Star */}
                    <svg
                      className="h-auto w-16 text-gray-800 dark:text-white"
                      width={110}
                      height={28}
                      viewBox="0 0 110 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M66.6601 8.35107C64.8995 8.35107 63.5167 8.72875 62.1331 9.48265C62.1331 5.4582 62.1331 1.81143 62.2594 0.554199L53.8321 2.06273V2.81736L54.7124 2.94301C55.8433 3.19431 56.2224 3.82257 56.4715 5.33255C56.725 8.35107 56.5979 24.4496 56.4715 27.0912C58.7354 27.5945 61.1257 27.9722 63.5159 27.9722C70.1819 27.9722 74.2064 23.8213 74.2064 17.281C74.2064 12.1249 70.9366 8.35107 66.6601 8.35107ZM63.7672 26.5878C63.2639 26.5878 62.6342 26.5878 62.258 26.4629C62.1316 24.7023 62.0067 17.281 62.1316 10.7413C62.8862 10.4893 63.3888 10.3637 64.0185 10.3637C66.7872 10.3637 68.2965 13.6335 68.2965 17.6572C68.2957 22.6898 66.4088 26.5878 63.7672 26.5878ZM22.1363 1.0568H0V2.18838L1.25796 2.31403C2.89214 2.56533 3.52184 3.57127 3.77242 5.9608C4.15082 10.4886 4.02445 18.6646 3.77242 22.5619C3.52112 24.9522 2.89287 26.0845 1.25796 26.2087L0 26.4615V27.4674H14.2123V26.4615L12.703 26.2087C11.0681 26.0838 10.4392 24.9522 10.1879 22.5619C10.0615 20.9263 9.93583 18.2847 9.93583 15.0156L12.9543 15.1413C14.8413 15.1413 15.7208 16.6505 16.0985 18.7881H17.2308V9.86106H16.0985C15.7201 11.9993 14.8413 13.5078 12.9543 13.5078L9.93655 13.6342C9.93655 9.35773 10.0622 5.33328 10.1886 2.94374H14.59C17.9869 2.94374 19.7475 5.08125 21.0047 8.85513L22.2626 8.47745L22.1363 1.0568Z"
                        fill="currentColor"
                      />
                      <path
                        d="M29.3053 8.09998C35.5944 8.09998 38.7385 12.3764 38.7385 18.0358C38.7385 23.4439 35.2167 27.9731 28.9276 27.9731C22.6393 27.9731 19.4951 23.6959 19.4951 18.0358C19.4951 12.6277 23.0162 8.09998 29.3053 8.09998ZM28.9276 9.35793C26.1604 9.35793 25.4058 13.1311 25.4058 18.0358C25.4058 22.8149 26.6637 26.7137 29.1796 26.7137C32.0703 26.7137 32.8264 22.9405 32.8264 18.0358C32.8264 13.2567 31.5699 9.35793 28.9276 9.35793ZM75.8403 18.1622C75.8403 13.0054 79.1101 8.09998 85.5248 8.09998C90.8057 8.09998 93.3224 11.9995 93.3224 17.1555H81.6253C81.4989 21.8089 83.7628 25.2051 88.2913 25.2051C90.3038 25.2051 91.3098 24.7033 92.5685 23.8223L93.0703 24.4505C91.8124 26.2111 89.0459 27.9731 85.5248 27.9731C79.8647 27.9724 75.8403 23.9479 75.8403 18.1622ZM81.6253 15.7726L87.5366 15.6463C87.5366 13.1311 87.159 9.35793 85.0214 9.35793C82.8839 9.35793 81.7502 12.8791 81.6253 15.7726ZM108.291 9.10663C106.782 8.47693 104.77 8.09998 102.506 8.09998C97.8538 8.09998 94.9594 10.8665 94.9594 14.137C94.9594 17.4075 97.0955 18.7904 100.118 19.7971C103.261 20.9279 104.142 21.8089 104.142 23.3182C104.142 24.8275 103.01 26.2103 100.997 26.2103C98.6084 26.2103 96.8464 24.8275 95.4635 21.0536L94.5825 21.3063L94.7089 26.84C96.2181 27.4683 98.9846 27.9724 101.375 27.9724C106.28 27.9724 109.425 25.4557 109.425 21.5576C109.425 18.9161 108.041 17.4075 104.771 16.1489C101.249 14.766 99.992 13.8857 99.992 12.2501C99.992 10.6152 101.126 9.48286 102.635 9.48286C104.897 9.48286 106.407 10.8665 107.54 14.2627L108.42 14.0114L108.291 9.10663ZM55.0883 8.6033C52.9508 7.3468 49.1769 7.97433 47.1651 12.5028L47.29 8.1007L38.8642 9.73561V10.4902L39.7444 10.6159C40.8775 10.7423 41.3794 11.3705 41.5057 13.0062C41.757 16.0247 41.6314 21.3078 41.5057 23.9486C41.3794 25.4564 40.8775 26.2111 39.7444 26.3374L38.8642 26.4638V27.4697H50.5606V26.4638L49.0513 26.3374C47.7941 26.2111 47.4164 25.4564 47.29 23.9486C47.0387 21.5584 47.0387 16.7793 47.1651 13.7608C47.7933 12.8798 50.5606 12.1259 53.0757 13.7608L55.0883 8.6033Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Star */}
                  </div>
                </div>
                {/* End Review */}
              </div>
              {/* End Review */}
            </div>
            {/* End Col */}
            <div className="relative ml-4">
              <img
                className="w-full rounded-md"
                src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
                alt="Image Description"
              />
              <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0" />
              {/* SVG*/}
              <div className="absolute bottom-0 left-0">
                <svg
                  className="w-2/3 ml-auto h-auto text-white dark:text-slate-900"
                  width={630}
                  height={451}
                  viewBox="0 0 630 451"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x={531}
                    y={352}
                    width={99}
                    height={99}
                    fill="currentColor"
                  />
                  <rect
                    x={140}
                    y={352}
                    width={106}
                    height={99}
                    fill="currentColor"
                  />
                  <rect
                    x={482}
                    y={402}
                    width={64}
                    height={49}
                    fill="currentColor"
                  />
                  <rect
                    x={433}
                    y={402}
                    width={63}
                    height={49}
                    fill="currentColor"
                  />
                  <rect
                    x={384}
                    y={352}
                    width={49}
                    height={50}
                    fill="currentColor"
                  />
                  <rect
                    x={531}
                    y={328}
                    width={50}
                    height={50}
                    fill="currentColor"
                  />
                  <rect
                    x={99}
                    y={303}
                    width={49}
                    height={58}
                    fill="currentColor"
                  />
                  <rect
                    x={99}
                    y={352}
                    width={49}
                    height={50}
                    fill="currentColor"
                  />
                  <rect
                    x={99}
                    y={392}
                    width={49}
                    height={59}
                    fill="currentColor"
                  />
                  <rect
                    x={44}
                    y={402}
                    width={66}
                    height={49}
                    fill="currentColor"
                  />
                  <rect
                    x={234}
                    y={402}
                    width={62}
                    height={49}
                    fill="currentColor"
                  />
                  <rect
                    x={334}
                    y={303}
                    width={50}
                    height={49}
                    fill="currentColor"
                  />
                  <rect x={581} width={49} height={49} fill="currentColor" />
                  <rect x={581} width={49} height={64} fill="currentColor" />
                  <rect
                    x={482}
                    y={123}
                    width={49}
                    height={49}
                    fill="currentColor"
                  />
                  <rect
                    x={507}
                    y={124}
                    width={49}
                    height={24}
                    fill="currentColor"
                  />
                  <rect
                    x={531}
                    y={49}
                    width={99}
                    height={99}
                    fill="currentColor"
                  />
                </svg>
              </div>
              {/* End SVG*/}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hero */}
      </>
      <>
        {/* Icon Blocks */}
        <div className="max-w-[100rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
            {/* Icon Block */}
            <a
              className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800"
              href="#"
            >
              <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                  Responsive
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Responsive, and mobile-first project on the web
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                  Learn more
                  <svg
                    className="w-2.5 h-2.5"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
            {/* End Icon Block */}
            {/* Icon Block */}
            <a
              className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800"
              href="#"
            >
              <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                  <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                  <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                  Customizable
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Components are easily customized and extendable
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                  Learn more
                  <svg
                    className="w-2.5 h-2.5"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
            {/* End Icon Block */}
            {/* Icon Block */}
            <a
              className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800"
              href="#"
            >
              <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                  Documentation
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Every component and plugin is well documented
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                  Learn more
                  <svg
                    className="w-2.5 h-2.5"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
            {/* End Icon Block */}
            {/* Icon Block */}
            <a
              className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800"
              href="#"
            >
              <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                  24/7 Support
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Contact us 24 hours a day, 7 days a week
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                  Learn more
                  <svg
                    className="w-2.5 h-2.5"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
            {/* End Icon Block */}
          </div>
        </div>
        {/* End Icon Blocks */}
      </>
      <>
        {/* Pricing */}
        <div className="max-w-[100rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Pricing
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Whatever your status, our offers evolve according to your needs.
            </p>
          </div>
          {/* End Title */}
          {/* Switch */}
          <div className="flex justify-center items-center">
            <label className="min-w-[3.5rem] text-sm text-gray-500 mr-3 dark:text-gray-400">
              Monthly
            </label>
            <input
              type="checkbox"
              id="hs-basic-with-description"
              className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800

    before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
              defaultChecked=""
            />
            <label className="relative min-w-[3.5rem] text-sm text-gray-500 ml-3 dark:text-gray-400">
              Annual
              <span className="absolute -top-10 left-auto -right-28">
                <span className="flex items-center">
                  <svg
                    className="w-14 h-8 -mr-6"
                    width={45}
                    height={25}
                    viewBox="0 0 45 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                      fill="currentColor"
                      className="fill-gray-300 dark:fill-gray-700"
                    />
                  </svg>
                  <span className="mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-blue-600 text-white rounded-full py-1 px-2.5">
                    Save up to 10%
                  </span>
                </span>
              </span>
            </label>
          </div>
          {/* End Switch */}
          {/* Grid */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
            {/* Card */}
            <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
              <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                Free
              </h4>
              <span className="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">
                Free
              </span>
              <p className="mt-2 text-sm text-gray-500">Forever free</p>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    1 user
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Plan features
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Product support
                  </span>
                </li>
              </ul>
              <a
                className="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700"
                href="#"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
              <p className="mb-3">
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
                  Most popular
                </span>
              </p>
              <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                Startup
              </h4>
              <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
                <span className="font-bold text-2xl -mr-2">$</span>
                39
              </span>
              <p className="mt-2 text-sm text-gray-500">
                All the basics for starting a new business
              </p>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    2 users
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Plan features
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Product support
                  </span>
                </li>
              </ul>
              <a
                className="mt-5 inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
              <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                Team
              </h4>
              <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
                <span className="font-bold text-2xl -mr-2">$</span>
                89
              </span>
              <p className="mt-2 text-sm text-gray-500">
                Everything you need for a growing business
              </p>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    5 users
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Plan features
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Product support
                  </span>
                </li>
              </ul>
              <a
                className="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700"
                href="#"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
              <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                Enterprise
              </h4>
              <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
                <span className="font-bold text-2xl -mr-2">$</span>
                149
              </span>
              <p className="mt-2 text-sm text-gray-500">
                Advanced features for scaling your business
              </p>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    10 users
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Plan features
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Product support
                  </span>
                </li>
              </ul>
              <a
                className="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700"
                href="#"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}
          </div>
          {/* End Grid */}
          {/* Comparison table */}
          <div className="mt-20 lg:mt-32">
            <div className="lg:text-center mb-10 lg:mb-20">
              <h3 className="text-2xl font-semibold dark:text-white">
                Compare plans
              </h3>
            </div>
            {/* xs to lg */}
            <div className="space-y-24 lg:hidden">
              <section>
                <div className="px-4 mb-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-800">
                    Free
                  </h2>
                </div>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Financial data
                  </caption>
                  <thead className="sticky top-0 inset-x-0 bg-white dark:bg-slate-900">
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Open/High/Low/Close
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Price-volume difference indicator
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    On-chain data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Network growth
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Average token age consumed
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Exchange flow
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Total ERC20 exchange funds flow
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Transaction volume
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Total circulation (beta)
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Velocity of tokens (beta)
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        ETH gas used
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Social data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Dev activity
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Topic search
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Relative social dominance
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Total social volume
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <div className="px-4 mb-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-800">
                    Startup
                  </h2>
                </div>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Financial data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Open/High/Low/Close
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Price-volume difference indicator
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    On-chain data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Network growth
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Average token age consumed
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Exchange flow
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Total ERC20 exchange funds flow
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Transaction volume
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Total circulation (beta)
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Velocity of tokens (beta)
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        ETH gas used
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Social data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Dev activity
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Topic search
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Relative social dominance
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Total social volume
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <div className="px-4 mb-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-800">
                    Team
                  </h2>
                </div>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Financial data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Open/High/Low/Close
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Price-volume difference indicator
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    On-chain data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Network growth
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Average token age consumed
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Exchange flow
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Total ERC20 exchange funds flow
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Transaction volume
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Total circulation (beta)
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Velocity of tokens (beta)
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        ETH gas used
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Social data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Dev activity
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Topic search
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Relative social dominance
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Total social volume
                      </th>
                      <td className="py-5 pr-4">
                        {/* Minus */}
                        <svg
                          className="ml-auto h-7 w-7 text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <div className="px-4 mb-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-800">
                    Enterprise
                  </h2>
                </div>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Financial data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Open/High/Low/Close
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Price-volume difference indicator
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    On-chain data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Network growth
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Average token age consumed
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Exchange flow
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Total ERC20 exchange funds flow
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Transaction volume
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Total circulation (beta)
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Velocity of tokens (beta)
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        ETH gas used
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Social data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Dev activity
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Topic search
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Relative social dominance
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                        scope="row"
                      >
                        Total social volume
                      </th>
                      <td className="py-5 pr-4">
                        {/* Check */}
                        <svg
                          className="ml-auto h-7 w-7 text-blue-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
            {/* End xs to lg */}
            {/* lg+ */}
            <div className="hidden lg:block">
              <table className="w-full h-px">
                <caption className="sr-only">Pricing plan comparison</caption>
                <thead>
                  <tr>
                    <th
                      className="pb-4 pl-6 pr-6 text-sm font-medium text-gray-800 text-left"
                      scope="col"
                    >
                      <span className="sr-only">Feature by</span>
                      <span className="dark:text-white">Plans</span>
                    </th>
                    <th
                      className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                      scope="col"
                    >
                      Free
                    </th>
                    <th
                      className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                      scope="col"
                    >
                      Startup
                    </th>
                    <th
                      className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                      scope="col"
                    >
                      Team
                    </th>
                    <th
                      className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                      scope="col"
                    >
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="border-t border-gray-200 divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                  <tr>
                    <th
                      className="py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark:bg-slate-800 dark:text-white"
                      colSpan={5}
                      scope="colgroup"
                    >
                      Financial data
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      Open/High/Low/Close
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      Price-volume difference indicator
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark:bg-slate-800 dark:text-white"
                      colSpan={5}
                      scope="colgroup"
                    >
                      On-chain data
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      Network growth
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      Average token age consumed
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      Exchange flow
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      Total ERC20 exchange funds flow
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      Transaction volume
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      Total circulation (beta)
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      Velocity of tokens (beta)
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      ETH gas used
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark:bg-slate-800 dark:text-white"
                      colSpan={5}
                      scope="colgroup"
                    >
                      Social data
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      Dev activity
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      Topic search
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto h-7 w-7 text-blue-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                          fill="currentColor"
                        />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* End lg+ */}
          </div>
          {/* End Comparison table */}
        </div>
        {/* End Pricing */}
      </>
      <>
        {/* Card Blog */}
        <div className="max-w-[100rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
            {/* Card */}
            <a className="group rounded-xl overflow-hidden" href="#">
              <div className="sm:flex">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                    Studio by Preline
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Produce professional, reliable streams easily leveraging
                    Preline's innovative broadcast studio
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                    Read more
                    <svg
                      className="w-2.5 h-2.5"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a className="group rounded-xl overflow-hidden" href="#">
              <div className="sm:flex">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                    Onsite
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Optimize your in-person experience with best-in-class
                    capabilities like badge printing and lead retrieval
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                    Read more
                    <svg
                      className="w-2.5 h-2.5"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a className="group rounded-xl overflow-hidden" href="#">
              <div className="sm:flex">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                    The complete guide to OKRs
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    How to make objectives and key results work for your company
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                    Read more
                    <svg
                      className="w-2.5 h-2.5"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a className="group rounded-xl overflow-hidden" href="#">
              <div className="sm:flex">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                    People program models
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Six approaches to bringing your People strategy to life
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                    Read more
                    <svg
                      className="w-2.5 h-2.5"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Blog */}
      </>
    </div>
  );
};

export default MainTest;
