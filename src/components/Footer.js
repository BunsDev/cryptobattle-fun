const navigation = {
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/ivanmolto",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/ivanmolto",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-white font-montserrat">
      <div
        className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8"
        aria-label="Footer"
      >
        <div className="-mx-5 -my-2 flex flex-wrap justify-center">
          <svg
            width="120"
            height="67"
            viewBox="0 0 323 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="323" height="181" rx="20" fill="white" />
            <path
              d="M207.193 120.175C204.004 115.437 196.311 112.916 190.806 111.431C190.163 111.262 189.498 111.092 188.787 110.919H188.731C185.765 110.169 182.399 109.338 179.779 107.917C176.777 106.273 175.306 104.141 175.306 101.401C175.306 100.955 175.345 100.514 175.43 100.075V99.9973C175.473 99.7958 175.526 99.5978 175.589 99.3998C175.596 99.3716 175.603 99.3468 175.614 99.3221V99.2938C176.003 98.1589 176.653 97.13 177.513 96.2921C179.736 94.04 183.29 92.7742 187.271 92.7742H187.394C190.325 92.8379 193.21 93.5167 195.866 94.7683C198.517 95.9704 200.911 97.671 202.926 99.7746L202.976 105.481V105.541H207.929V88.3513H202.986V92.2474C202.986 92.304 202.958 92.3606 202.908 92.3889C202.862 92.3889 202.802 92.3606 202.774 92.3288C200.681 90.7378 198.351 89.4827 195.873 88.6094C193.214 87.7007 190.428 87.2164 187.617 87.1775C184.393 87.1775 181.759 87.5523 179.56 88.27C177.732 88.8781 176.031 89.8256 174.55 91.0595C172.938 92.3182 171.644 93.9374 170.77 95.783C169.925 97.5649 169.483 99.5094 169.473 101.479C169.448 102.645 169.593 103.809 169.904 104.936C170.286 106.181 170.855 107.362 171.594 108.437C171.658 108.539 171.732 108.635 171.799 108.734C171.866 108.833 171.87 108.829 171.905 108.875L171.951 108.935C175.197 113.418 182.445 115.405 187.73 116.865L187.875 116.904L189.049 117.23L190.322 117.572C193.076 118.248 195.774 119.146 198.383 120.26C199.744 120.861 200.946 121.769 201.89 122.922C202.763 123.986 203.357 125.255 203.612 126.609C203.859 127.96 203.757 129.353 203.315 130.65C202.795 132.146 201.936 133.504 200.805 134.61C199.564 135.717 198.104 136.551 196.523 137.064C194.985 137.559 193.387 137.845 191.771 137.916C189.187 138.04 186.599 137.746 184.11 137.05C179.889 135.713 176.035 133.136 173.535 129.986C173.45 129.883 173.39 129.767 173.351 129.639L173.302 124.732V124.668H168.349V142.636H173.305V137.382C175.377 139.203 177.774 140.614 180.376 141.533C183.417 142.654 186.62 143.265 189.859 143.343H190.262C193.012 143.343 199.447 143.343 204.496 139.069C205.892 137.859 207.052 136.399 207.908 134.759C208.731 133.182 209.269 131.471 209.495 129.706C209.725 128.016 209.647 126.298 209.262 124.636C208.898 123.021 208.194 121.497 207.197 120.175H207.193Z"
              fill="black"
            />
            <path
              d="M158.279 120.175C155.154 115.462 147.429 112.927 141.892 111.435C141.263 111.269 140.609 111.11 139.916 110.936C133.913 109.455 126.435 107.602 126.35 101.387C126.35 100.45 126.548 99.5236 126.933 98.6715C127.347 97.7735 127.923 96.9603 128.63 96.2709C130.883 94.0506 134.415 92.7742 138.364 92.7742H138.488C141.418 92.8379 144.3 93.5167 146.952 94.7683C149.593 95.9704 151.976 97.671 153.97 99.7746L154.069 105.481V105.545H159.022V88.3513H154.079V92.2474C154.079 92.304 154.051 92.3571 154.005 92.3889C153.966 92.3889 153.924 92.3889 153.867 92.3288C151.774 90.7378 149.444 89.4827 146.966 88.6094C144.307 87.7007 141.521 87.2164 138.71 87.1775C135.468 87.1775 132.827 87.5523 130.635 88.27C128.811 88.8816 127.121 89.8256 125.643 91.0595C124.031 92.3182 122.737 93.9374 121.863 95.783C121.015 97.5684 120.569 99.5165 120.559 101.493C120.534 102.66 120.679 103.819 120.983 104.947C121.358 106.185 121.913 107.362 122.627 108.437C125.738 113.284 133.35 115.366 138.905 116.89L139.036 116.925L140.139 117.23L141.302 117.541L141.411 117.569C144.166 118.244 146.863 119.142 149.472 120.256C150.841 120.864 152.046 121.783 153.001 122.936C153.878 124.014 154.475 125.294 154.73 126.659C154.974 128.013 154.868 129.406 154.422 130.703C153.899 132.199 153.033 133.553 151.898 134.656C150.664 135.759 149.211 136.59 147.634 137.092C146.092 137.587 144.491 137.866 142.872 137.927C142.539 137.927 142.189 137.948 141.836 137.948C139.573 137.955 137.321 137.647 135.143 137.036C134.892 136.958 134.637 136.869 134.393 136.781H134.354C133.849 136.601 133.34 136.406 132.852 136.176C130.402 135.102 128.164 133.606 126.237 131.754L126.138 131.658C125.837 131.358 125.533 131.039 125.24 130.703L125.014 130.445C124.883 130.29 124.755 130.141 124.639 129.982C124.558 129.88 124.497 129.763 124.459 129.639L124.409 124.732V124.668H119.385V142.636H124.391V137.382C126.463 139.203 128.86 140.614 131.462 141.533C134.503 142.654 137.706 143.265 140.945 143.343H141.348C144.084 143.343 150.491 143.343 155.582 139.069C156.978 137.859 158.138 136.399 158.994 134.759C159.817 133.192 160.358 131.492 160.588 129.738C160.818 128.048 160.74 126.33 160.355 124.668C159.994 123.038 159.287 121.508 158.283 120.171L158.279 120.175Z"
              fill="black"
            />
            <path
              d="M107.474 138.362L93.9326 117.891C96.2272 117.979 98.5111 117.538 100.604 116.597C103.563 115.094 105.943 113.192 107.403 110.378C108.591 108.055 109.206 105.481 109.196 102.872C109.196 98.7674 107.576 94.8323 104.691 91.912C101.562 89.0765 97.6555 87.6941 92.7411 87.6941H66.511V93.358H72.0794V138.433H66.0231V143.17H83.6053V138.433H77.9414V117.976H87.4166L100.682 138.433H94.6538V143.17H113.576V138.433H107.658C107.587 138.436 107.52 138.411 107.47 138.365L107.474 138.362ZM77.9414 93.1035H92.4547C96.9131 93.1035 100.335 94.8748 102.068 97.9189C103.765 101.027 103.705 104.799 101.909 107.854C100.13 110.855 98.0267 112.514 93.3669 112.514H77.9378V93.1035H77.9414Z"
              fill="black"
            />
            <path
              d="M254.693 126.764C254.693 119.969 251.26 115.058 245.564 112.954C250.394 110.416 252.526 106.244 252.526 101.948C252.526 92.0312 244.207 86.7773 233.356 86.7773C227.434 86.8233 221.123 88.7926 216.81 94.8454L221.314 97.7835C223.725 94.5378 227.166 92.0312 233.356 92.0312C241.237 92.0312 246.83 95.2308 246.83 101.326C246.83 107.421 241.223 110.419 235.481 110.419H227.661V116.048H235.934C243.256 116.048 249.043 119.994 248.863 126.701C248.453 133.832 242.17 137.661 233.947 137.661C228.654 137.661 222.778 135.996 218.39 131.304L218.164 131.219L214.321 135.426L214.501 135.472C220.017 140.648 226.575 143.325 233.943 143.325C245.292 143.304 254.693 137.162 254.693 126.768V126.764Z"
              fill="black"
            />
            <path
              d="M62.3743 112.474H48.1226V118.293H62.3743V112.474Z"
              fill="#0B70FF"
            />
            <path
              d="M274.877 112.474H260.626V118.293H274.877V112.474Z"
              fill="#0B70FF"
            />
            <path
              d="M71.5282 51.0972C71.2082 51.0972 71.0482 51.2572 71.0482 51.5772V58.6172C71.0482 58.9372 71.2082 59.0972 71.5282 59.0972H74.0882C74.4082 59.0972 74.5682 59.2572 74.5682 59.5772C74.5682 59.8972 74.4082 60.0572 74.0882 60.0572H67.3682C67.0482 60.0572 66.8882 59.8972 66.8882 59.5772C66.8882 59.2572 67.0482 59.0972 67.3682 59.0972H69.6082C69.9282 59.0972 70.0882 58.9372 70.0882 58.6172V39.0972C70.0882 38.7772 69.9282 38.6172 69.6082 38.6172H67.3682C67.0482 38.6172 66.8882 38.4572 66.8882 38.1372C66.8882 37.8172 67.0482 37.6572 67.3682 37.6572H78.0882C80.2002 37.6572 81.7895 38.2332 82.8562 39.3852C83.9442 40.5159 84.4882 42.1799 84.4882 44.3772C84.4882 46.5746 83.9442 48.2492 82.8562 49.4012C81.7895 50.5319 80.2002 51.0972 78.0882 51.0972H71.5282ZM78.0882 50.1372C81.7149 50.1372 83.5282 48.2172 83.5282 44.3772C83.5282 40.5372 81.7149 38.6172 78.0882 38.6172H71.5282C71.2082 38.6172 71.0482 38.7772 71.0482 39.0972V49.6572C71.0482 49.9772 71.2082 50.1372 71.5282 50.1372H78.0882Z"
              fill="black"
            />
            <path
              d="M89.4167 58.0732C87.966 56.5372 87.2407 54.5319 87.2407 52.0572C87.2407 49.5826 87.966 47.5772 89.4167 46.0412C90.8673 44.5052 92.7554 43.7372 95.0807 43.7372C97.406 43.7372 99.294 44.5052 100.745 46.0412C102.195 47.5772 102.921 49.5826 102.921 52.0572C102.921 54.5319 102.195 56.5372 100.745 58.0732C99.294 59.6092 97.406 60.3772 95.0807 60.3772C92.7554 60.3772 90.8673 59.6092 89.4167 58.0732ZM95.0807 44.6972C93.0113 44.6972 91.3473 45.3692 90.0887 46.7132C88.83 48.0572 88.2007 49.8492 88.2007 52.0892C88.2007 54.3079 88.8193 56.0892 90.0567 57.4332C91.3153 58.7559 92.99 59.4172 95.0807 59.4172C97.1714 59.4172 98.8354 58.7559 100.073 57.4332C101.331 56.0892 101.961 54.3079 101.961 52.0892C101.961 49.8492 101.331 48.0572 100.073 46.7132C98.814 45.3692 97.15 44.6972 95.0807 44.6972Z"
              fill="black"
            />
            <path
              d="M104.937 44.0572H111.017C111.337 44.0572 111.497 44.2172 111.497 44.5372C111.497 44.8572 111.337 45.0172 111.017 45.0172H109.097C108.713 45.0172 108.606 45.1772 108.777 45.4972L113.097 57.7532C113.139 57.8812 113.203 57.9452 113.289 57.9452C113.374 57.9452 113.438 57.8812 113.481 57.7532L117.673 44.5372C117.758 44.2172 117.971 44.0572 118.313 44.0572C118.654 44.0572 118.867 44.2172 118.953 44.5372L123.145 57.7532C123.187 57.8812 123.251 57.9452 123.337 57.9452C123.422 57.9452 123.486 57.8812 123.529 57.7532L127.849 45.4972C128.019 45.1772 127.913 45.0172 127.529 45.0172H125.609C125.289 45.0172 125.129 44.8572 125.129 44.5372C125.129 44.2172 125.289 44.0572 125.609 44.0572H131.689C132.009 44.0572 132.169 44.2172 132.169 44.5372C132.169 44.8572 132.009 45.0172 131.689 45.0172H129.609C129.289 45.0172 129.075 45.1772 128.969 45.4972L123.881 59.8972C123.795 60.2172 123.614 60.3772 123.337 60.3772C123.059 60.3772 122.878 60.2172 122.793 59.8972L118.633 46.7772C118.59 46.6066 118.483 46.5212 118.313 46.5212C118.142 46.5212 118.035 46.6066 117.993 46.7772L113.833 59.8972C113.747 60.2172 113.566 60.3772 113.289 60.3772C113.011 60.3772 112.83 60.2172 112.745 59.8972L107.657 45.4972C107.55 45.1772 107.337 45.0172 107.017 45.0172H104.937C104.617 45.0172 104.457 44.8572 104.457 44.5372C104.457 44.2172 104.617 44.0572 104.937 44.0572Z"
              fill="black"
            />
            <path
              d="M146.295 57.8172C146.637 57.5612 146.893 57.3479 147.063 57.1772C147.255 57.0066 147.405 56.9532 147.511 57.0172C147.618 57.0599 147.746 57.1772 147.895 57.3692C148.066 57.5399 148.023 57.7319 147.767 57.9452C146.999 58.6066 146.114 59.1826 145.111 59.6732C144.109 60.1426 142.829 60.3772 141.271 60.3772C139.01 60.3772 137.186 59.5986 135.799 58.0412C134.434 56.4839 133.751 54.4892 133.751 52.0572C133.751 49.6252 134.434 47.6306 135.799 46.0732C137.186 44.5159 138.989 43.7372 141.207 43.7372C143.447 43.7372 145.271 44.4412 146.679 45.8492C148.087 47.2572 148.791 48.9532 148.791 50.9372V51.4172C148.791 52.0572 148.471 52.3772 147.831 52.3772H135.223C134.861 52.3772 134.701 52.5372 134.743 52.8572C134.871 54.7132 135.501 56.2706 136.631 57.5292C137.783 58.7879 139.351 59.4172 141.335 59.4172C143.341 59.4172 144.994 58.8839 146.295 57.8172ZM134.775 51.0332C134.775 51.2892 134.925 51.4172 135.223 51.4172H147.351C147.671 51.4172 147.831 51.2572 147.831 50.9372C147.831 49.2306 147.202 47.7692 145.943 46.5532C144.706 45.3159 143.127 44.6972 141.207 44.6972C139.309 44.6972 137.762 45.3692 136.567 46.7132C135.373 48.0572 134.775 49.4972 134.775 51.0332Z"
              fill="black"
            />
            <path
              d="M163.936 44.6972C161.248 44.6972 159.008 45.7532 157.216 47.8652C156.704 48.4626 156.277 49.0599 155.936 49.6572V58.6172C155.936 58.9372 156.096 59.0972 156.416 59.0972H158.976C159.296 59.0972 159.456 59.2572 159.456 59.5772C159.456 59.8972 159.296 60.0572 158.976 60.0572H152.256C151.936 60.0572 151.776 59.8972 151.776 59.5772C151.776 59.2572 151.936 59.0972 152.256 59.0972H154.496C154.816 59.0972 154.976 58.9372 154.976 58.6172V45.4972C154.976 45.1772 154.816 45.0172 154.496 45.0172H152.256C151.936 45.0172 151.776 44.8572 151.776 44.5372C151.776 44.2172 151.936 44.0572 152.256 44.0572H155.456C155.776 44.0572 155.936 44.2172 155.936 44.5372V47.0652C155.936 47.5986 156.16 47.6092 156.608 47.0972C157.397 46.2012 158.421 45.4226 159.68 44.7612C160.96 44.0786 162.378 43.7372 163.936 43.7372H165.504C165.824 43.7372 165.984 43.8972 165.984 44.2172V48.2172C165.984 48.5372 165.824 48.6972 165.504 48.6972C165.184 48.6972 165.024 48.5372 165.024 48.2172V45.1772C165.024 44.8572 164.864 44.6972 164.544 44.6972H163.936Z"
              fill="black"
            />
            <path
              d="M181.43 57.8172C181.772 57.5612 182.028 57.3479 182.198 57.1772C182.39 57.0066 182.54 56.9532 182.646 57.0172C182.753 57.0599 182.881 57.1772 183.03 57.3692C183.201 57.5399 183.158 57.7319 182.902 57.9452C182.134 58.6066 181.249 59.1826 180.246 59.6732C179.244 60.1426 177.964 60.3772 176.406 60.3772C174.145 60.3772 172.321 59.5986 170.934 58.0412C169.569 56.4839 168.886 54.4892 168.886 52.0572C168.886 49.6252 169.569 47.6306 170.934 46.0732C172.321 44.5159 174.124 43.7372 176.342 43.7372C178.582 43.7372 180.406 44.4412 181.814 45.8492C183.222 47.2572 183.926 48.9532 183.926 50.9372V51.4172C183.926 52.0572 183.606 52.3772 182.966 52.3772H170.358C169.996 52.3772 169.836 52.5372 169.878 52.8572C170.006 54.7132 170.636 56.2706 171.766 57.5292C172.918 58.7879 174.486 59.4172 176.47 59.4172C178.476 59.4172 180.129 58.8839 181.43 57.8172ZM169.91 51.0332C169.91 51.2892 170.06 51.4172 170.358 51.4172H182.486C182.806 51.4172 182.966 51.2572 182.966 50.9372C182.966 49.2306 182.337 47.7692 181.078 46.5532C179.841 45.3159 178.262 44.6972 176.342 44.6972C174.444 44.6972 172.897 45.3692 171.702 46.7132C170.508 48.0572 169.91 49.4972 169.91 51.0332Z"
              fill="black"
            />
            <path
              d="M200.799 39.0972C200.799 38.7772 200.639 38.6172 200.319 38.6172H197.759C197.439 38.6172 197.279 38.4572 197.279 38.1372C197.279 37.8172 197.439 37.6572 197.759 37.6572H201.279C201.599 37.6572 201.759 37.8172 201.759 38.1372V58.6172C201.759 58.9372 201.919 59.0972 202.239 59.0972H204.479C204.799 59.0972 204.959 59.2572 204.959 59.5772C204.959 59.8972 204.799 60.0572 204.479 60.0572H201.279C200.959 60.0572 200.799 59.8972 200.799 59.5772V57.7852C200.799 57.5719 200.756 57.4226 200.671 57.3372C200.585 57.2519 200.457 57.2946 200.287 57.4652C199.753 58.1692 198.964 58.8306 197.919 59.4492C196.895 60.0679 195.785 60.3772 194.591 60.3772C192.329 60.3772 190.559 59.6412 189.279 58.1692C187.999 56.6759 187.359 54.6492 187.359 52.0892C187.359 49.5292 188.116 47.5559 189.631 46.1692C191.167 44.7612 193.289 44.0572 195.999 44.0572H200.319C200.639 44.0572 200.799 43.8972 200.799 43.5772V39.0972ZM200.799 45.4972C200.799 45.1772 200.639 45.0172 200.319 45.0172H195.999C193.567 45.0172 191.679 45.6146 190.335 46.8092C188.991 48.0039 188.319 49.7639 188.319 52.0892C188.319 54.3932 188.873 56.1959 189.983 57.4972C191.113 58.7772 192.564 59.4172 194.335 59.4172C196.127 59.4172 197.737 58.7026 199.167 57.2732C199.764 56.6759 200.308 55.9506 200.799 55.0972V45.4972Z"
              fill="black"
            />
            <path
              d="M230.107 48.0892C233.2 48.6866 234.747 50.7346 234.747 54.2332C234.747 55.9399 234.214 57.3372 233.147 58.4252C232.102 59.5132 230.608 60.0572 228.667 60.0572H217.627C217.307 60.0572 217.147 59.8972 217.147 59.5772C217.147 59.2572 217.307 59.0972 217.627 59.0972H219.867C220.187 59.0972 220.347 58.9372 220.347 58.6172V39.0972C220.347 38.7772 220.187 38.6172 219.867 38.6172H217.627C217.307 38.6172 217.147 38.4572 217.147 38.1372C217.147 37.8172 217.307 37.6572 217.627 37.6572H227.387C229.094 37.6572 230.48 38.1906 231.547 39.2572C232.614 40.3239 233.147 41.6572 233.147 43.2572C233.147 45.5186 232.134 47.1292 230.107 48.0892ZM221.307 47.4172C221.307 47.7372 221.467 47.8972 221.787 47.8972H227.547C228.891 47.8972 230 47.4492 230.875 46.5532C231.75 45.6359 232.187 44.5159 232.187 43.1932C232.187 41.8706 231.75 40.7826 230.875 39.9292C230.022 39.0546 228.859 38.6172 227.387 38.6172H221.787C221.467 38.6172 221.307 38.7772 221.307 39.0972V47.4172ZM221.307 58.6172C221.307 58.9372 221.467 59.0972 221.787 59.0972H228.667C230.267 59.0972 231.515 58.6492 232.411 57.7532C233.328 56.8359 233.787 55.5772 233.787 53.9772C233.787 52.3772 233.328 51.1292 232.411 50.2332C231.515 49.3159 230.267 48.8572 228.667 48.8572H221.787C221.467 48.8572 221.307 49.0172 221.307 49.3372V58.6172Z"
              fill="black"
            />
            <path
              d="M244.752 65.2092C244.219 65.8066 243.696 66.2119 243.184 66.4252C242.694 66.6599 242.15 66.7772 241.552 66.7772C240.55 66.7772 239.707 66.5852 239.024 66.2012C238.342 65.8386 237.819 65.4226 237.456 64.9532C237.2 64.6972 237.179 64.4519 237.392 64.2172C237.606 64.0039 237.83 64.0039 238.064 64.2172C238.427 64.5799 238.875 64.9319 239.408 65.2732C239.963 65.6359 240.688 65.8172 241.584 65.8172C242.502 65.8172 243.28 65.4439 243.92 64.6972C244.56 63.9719 245.19 62.7986 245.808 61.1772L246.128 60.3452C246.214 60.0679 246.214 59.8119 246.128 59.5772L239.504 45.4972C239.334 45.1772 239.12 45.0172 238.864 45.0172H236.784C236.464 45.0172 236.304 44.8572 236.304 44.5372C236.304 44.2172 236.464 44.0572 236.784 44.0572H242.864C243.184 44.0572 243.344 44.2172 243.344 44.5372C243.344 44.8572 243.184 45.0172 242.864 45.0172H240.88C240.496 45.0172 240.39 45.1772 240.56 45.4972L246.608 58.1372C246.715 58.4359 246.832 58.4359 246.96 58.1372L251.856 45.4972C252.006 45.1772 251.899 45.0172 251.536 45.0172H249.552C249.232 45.0172 249.072 44.8572 249.072 44.5372C249.072 44.2172 249.232 44.0572 249.552 44.0572H255.632C255.952 44.0572 256.112 44.2172 256.112 44.5372C256.112 44.8572 255.952 45.0172 255.632 45.0172H253.552C253.275 45.0172 253.062 45.1772 252.912 45.4972L246.832 61.1772C246 63.2679 245.307 64.6119 244.752 65.2092Z"
              fill="black"
            />
            <path
              d="M71.5282 51.0972C71.2082 51.0972 71.0482 51.2572 71.0482 51.5772V58.6172C71.0482 58.9372 71.2082 59.0972 71.5282 59.0972H74.0882C74.4082 59.0972 74.5682 59.2572 74.5682 59.5772C74.5682 59.8972 74.4082 60.0572 74.0882 60.0572H67.3682C67.0482 60.0572 66.8882 59.8972 66.8882 59.5772C66.8882 59.2572 67.0482 59.0972 67.3682 59.0972H69.6082C69.9282 59.0972 70.0882 58.9372 70.0882 58.6172V39.0972C70.0882 38.7772 69.9282 38.6172 69.6082 38.6172H67.3682C67.0482 38.6172 66.8882 38.4572 66.8882 38.1372C66.8882 37.8172 67.0482 37.6572 67.3682 37.6572H78.0882C80.2002 37.6572 81.7895 38.2332 82.8562 39.3852C83.9442 40.5159 84.4882 42.1799 84.4882 44.3772C84.4882 46.5746 83.9442 48.2492 82.8562 49.4012C81.7895 50.5319 80.2002 51.0972 78.0882 51.0972H71.5282ZM78.0882 50.1372C81.7149 50.1372 83.5282 48.2172 83.5282 44.3772C83.5282 40.5372 81.7149 38.6172 78.0882 38.6172H71.5282C71.2082 38.6172 71.0482 38.7772 71.0482 39.0972V49.6572C71.0482 49.9772 71.2082 50.1372 71.5282 50.1372H78.0882Z"
              stroke="black"
            />
            <path
              d="M89.4167 58.0732C87.966 56.5372 87.2407 54.5319 87.2407 52.0572C87.2407 49.5826 87.966 47.5772 89.4167 46.0412C90.8673 44.5052 92.7554 43.7372 95.0807 43.7372C97.406 43.7372 99.294 44.5052 100.745 46.0412C102.195 47.5772 102.921 49.5826 102.921 52.0572C102.921 54.5319 102.195 56.5372 100.745 58.0732C99.294 59.6092 97.406 60.3772 95.0807 60.3772C92.7554 60.3772 90.8673 59.6092 89.4167 58.0732ZM95.0807 44.6972C93.0113 44.6972 91.3473 45.3692 90.0887 46.7132C88.83 48.0572 88.2007 49.8492 88.2007 52.0892C88.2007 54.3079 88.8193 56.0892 90.0567 57.4332C91.3153 58.7559 92.99 59.4172 95.0807 59.4172C97.1714 59.4172 98.8354 58.7559 100.073 57.4332C101.331 56.0892 101.961 54.3079 101.961 52.0892C101.961 49.8492 101.331 48.0572 100.073 46.7132C98.814 45.3692 97.15 44.6972 95.0807 44.6972Z"
              stroke="black"
            />
            <path
              d="M104.937 44.0572H111.017C111.337 44.0572 111.497 44.2172 111.497 44.5372C111.497 44.8572 111.337 45.0172 111.017 45.0172H109.097C108.713 45.0172 108.606 45.1772 108.777 45.4972L113.097 57.7532C113.139 57.8812 113.203 57.9452 113.289 57.9452C113.374 57.9452 113.438 57.8812 113.481 57.7532L117.673 44.5372C117.758 44.2172 117.971 44.0572 118.313 44.0572C118.654 44.0572 118.867 44.2172 118.953 44.5372L123.145 57.7532C123.187 57.8812 123.251 57.9452 123.337 57.9452C123.422 57.9452 123.486 57.8812 123.529 57.7532L127.849 45.4972C128.019 45.1772 127.913 45.0172 127.529 45.0172H125.609C125.289 45.0172 125.129 44.8572 125.129 44.5372C125.129 44.2172 125.289 44.0572 125.609 44.0572H131.689C132.009 44.0572 132.169 44.2172 132.169 44.5372C132.169 44.8572 132.009 45.0172 131.689 45.0172H129.609C129.289 45.0172 129.075 45.1772 128.969 45.4972L123.881 59.8972C123.795 60.2172 123.614 60.3772 123.337 60.3772C123.059 60.3772 122.878 60.2172 122.793 59.8972L118.633 46.7772C118.59 46.6066 118.483 46.5212 118.313 46.5212C118.142 46.5212 118.035 46.6066 117.993 46.7772L113.833 59.8972C113.747 60.2172 113.566 60.3772 113.289 60.3772C113.011 60.3772 112.83 60.2172 112.745 59.8972L107.657 45.4972C107.55 45.1772 107.337 45.0172 107.017 45.0172H104.937C104.617 45.0172 104.457 44.8572 104.457 44.5372C104.457 44.2172 104.617 44.0572 104.937 44.0572Z"
              stroke="black"
            />
            <path
              d="M146.295 57.8172C146.637 57.5612 146.893 57.3479 147.063 57.1772C147.255 57.0066 147.405 56.9532 147.511 57.0172C147.618 57.0599 147.746 57.1772 147.895 57.3692C148.066 57.5399 148.023 57.7319 147.767 57.9452C146.999 58.6066 146.114 59.1826 145.111 59.6732C144.109 60.1426 142.829 60.3772 141.271 60.3772C139.01 60.3772 137.186 59.5986 135.799 58.0412C134.434 56.4839 133.751 54.4892 133.751 52.0572C133.751 49.6252 134.434 47.6306 135.799 46.0732C137.186 44.5159 138.989 43.7372 141.207 43.7372C143.447 43.7372 145.271 44.4412 146.679 45.8492C148.087 47.2572 148.791 48.9532 148.791 50.9372V51.4172C148.791 52.0572 148.471 52.3772 147.831 52.3772H135.223C134.861 52.3772 134.701 52.5372 134.743 52.8572C134.871 54.7132 135.501 56.2706 136.631 57.5292C137.783 58.7879 139.351 59.4172 141.335 59.4172C143.341 59.4172 144.994 58.8839 146.295 57.8172ZM134.775 51.0332C134.775 51.2892 134.925 51.4172 135.223 51.4172H147.351C147.671 51.4172 147.831 51.2572 147.831 50.9372C147.831 49.2306 147.202 47.7692 145.943 46.5532C144.706 45.3159 143.127 44.6972 141.207 44.6972C139.309 44.6972 137.762 45.3692 136.567 46.7132C135.373 48.0572 134.775 49.4972 134.775 51.0332Z"
              stroke="black"
            />
            <path
              d="M163.936 44.6972C161.248 44.6972 159.008 45.7532 157.216 47.8652C156.704 48.4626 156.277 49.0599 155.936 49.6572V58.6172C155.936 58.9372 156.096 59.0972 156.416 59.0972H158.976C159.296 59.0972 159.456 59.2572 159.456 59.5772C159.456 59.8972 159.296 60.0572 158.976 60.0572H152.256C151.936 60.0572 151.776 59.8972 151.776 59.5772C151.776 59.2572 151.936 59.0972 152.256 59.0972H154.496C154.816 59.0972 154.976 58.9372 154.976 58.6172V45.4972C154.976 45.1772 154.816 45.0172 154.496 45.0172H152.256C151.936 45.0172 151.776 44.8572 151.776 44.5372C151.776 44.2172 151.936 44.0572 152.256 44.0572H155.456C155.776 44.0572 155.936 44.2172 155.936 44.5372V47.0652C155.936 47.5986 156.16 47.6092 156.608 47.0972C157.397 46.2012 158.421 45.4226 159.68 44.7612C160.96 44.0786 162.378 43.7372 163.936 43.7372H165.504C165.824 43.7372 165.984 43.8972 165.984 44.2172V48.2172C165.984 48.5372 165.824 48.6972 165.504 48.6972C165.184 48.6972 165.024 48.5372 165.024 48.2172V45.1772C165.024 44.8572 164.864 44.6972 164.544 44.6972H163.936Z"
              stroke="black"
            />
            <path
              d="M181.43 57.8172C181.772 57.5612 182.028 57.3479 182.198 57.1772C182.39 57.0066 182.54 56.9532 182.646 57.0172C182.753 57.0599 182.881 57.1772 183.03 57.3692C183.201 57.5399 183.158 57.7319 182.902 57.9452C182.134 58.6066 181.249 59.1826 180.246 59.6732C179.244 60.1426 177.964 60.3772 176.406 60.3772C174.145 60.3772 172.321 59.5986 170.934 58.0412C169.569 56.4839 168.886 54.4892 168.886 52.0572C168.886 49.6252 169.569 47.6306 170.934 46.0732C172.321 44.5159 174.124 43.7372 176.342 43.7372C178.582 43.7372 180.406 44.4412 181.814 45.8492C183.222 47.2572 183.926 48.9532 183.926 50.9372V51.4172C183.926 52.0572 183.606 52.3772 182.966 52.3772H170.358C169.996 52.3772 169.836 52.5372 169.878 52.8572C170.006 54.7132 170.636 56.2706 171.766 57.5292C172.918 58.7879 174.486 59.4172 176.47 59.4172C178.476 59.4172 180.129 58.8839 181.43 57.8172ZM169.91 51.0332C169.91 51.2892 170.06 51.4172 170.358 51.4172H182.486C182.806 51.4172 182.966 51.2572 182.966 50.9372C182.966 49.2306 182.337 47.7692 181.078 46.5532C179.841 45.3159 178.262 44.6972 176.342 44.6972C174.444 44.6972 172.897 45.3692 171.702 46.7132C170.508 48.0572 169.91 49.4972 169.91 51.0332Z"
              stroke="black"
            />
            <path
              d="M200.799 39.0972C200.799 38.7772 200.639 38.6172 200.319 38.6172H197.759C197.439 38.6172 197.279 38.4572 197.279 38.1372C197.279 37.8172 197.439 37.6572 197.759 37.6572H201.279C201.599 37.6572 201.759 37.8172 201.759 38.1372V58.6172C201.759 58.9372 201.919 59.0972 202.239 59.0972H204.479C204.799 59.0972 204.959 59.2572 204.959 59.5772C204.959 59.8972 204.799 60.0572 204.479 60.0572H201.279C200.959 60.0572 200.799 59.8972 200.799 59.5772V57.7852C200.799 57.5719 200.756 57.4226 200.671 57.3372C200.585 57.2519 200.457 57.2946 200.287 57.4652C199.753 58.1692 198.964 58.8306 197.919 59.4492C196.895 60.0679 195.785 60.3772 194.591 60.3772C192.329 60.3772 190.559 59.6412 189.279 58.1692C187.999 56.6759 187.359 54.6492 187.359 52.0892C187.359 49.5292 188.116 47.5559 189.631 46.1692C191.167 44.7612 193.289 44.0572 195.999 44.0572H200.319C200.639 44.0572 200.799 43.8972 200.799 43.5772V39.0972ZM200.799 45.4972C200.799 45.1772 200.639 45.0172 200.319 45.0172H195.999C193.567 45.0172 191.679 45.6146 190.335 46.8092C188.991 48.0039 188.319 49.7639 188.319 52.0892C188.319 54.3932 188.873 56.1959 189.983 57.4972C191.113 58.7772 192.564 59.4172 194.335 59.4172C196.127 59.4172 197.737 58.7026 199.167 57.2732C199.764 56.6759 200.308 55.9506 200.799 55.0972V45.4972Z"
              stroke="black"
            />
            <path
              d="M230.107 48.0892C233.2 48.6866 234.747 50.7346 234.747 54.2332C234.747 55.9399 234.214 57.3372 233.147 58.4252C232.102 59.5132 230.608 60.0572 228.667 60.0572H217.627C217.307 60.0572 217.147 59.8972 217.147 59.5772C217.147 59.2572 217.307 59.0972 217.627 59.0972H219.867C220.187 59.0972 220.347 58.9372 220.347 58.6172V39.0972C220.347 38.7772 220.187 38.6172 219.867 38.6172H217.627C217.307 38.6172 217.147 38.4572 217.147 38.1372C217.147 37.8172 217.307 37.6572 217.627 37.6572H227.387C229.094 37.6572 230.48 38.1906 231.547 39.2572C232.614 40.3239 233.147 41.6572 233.147 43.2572C233.147 45.5186 232.134 47.1292 230.107 48.0892ZM221.307 47.4172C221.307 47.7372 221.467 47.8972 221.787 47.8972H227.547C228.891 47.8972 230 47.4492 230.875 46.5532C231.75 45.6359 232.187 44.5159 232.187 43.1932C232.187 41.8706 231.75 40.7826 230.875 39.9292C230.022 39.0546 228.859 38.6172 227.387 38.6172H221.787C221.467 38.6172 221.307 38.7772 221.307 39.0972V47.4172ZM221.307 58.6172C221.307 58.9372 221.467 59.0972 221.787 59.0972H228.667C230.267 59.0972 231.515 58.6492 232.411 57.7532C233.328 56.8359 233.787 55.5772 233.787 53.9772C233.787 52.3772 233.328 51.1292 232.411 50.2332C231.515 49.3159 230.267 48.8572 228.667 48.8572H221.787C221.467 48.8572 221.307 49.0172 221.307 49.3372V58.6172Z"
              stroke="black"
            />
            <path
              d="M244.752 65.2092C244.219 65.8066 243.696 66.2119 243.184 66.4252C242.694 66.6599 242.15 66.7772 241.552 66.7772C240.55 66.7772 239.707 66.5852 239.024 66.2012C238.342 65.8386 237.819 65.4226 237.456 64.9532C237.2 64.6972 237.179 64.4519 237.392 64.2172C237.606 64.0039 237.83 64.0039 238.064 64.2172C238.427 64.5799 238.875 64.9319 239.408 65.2732C239.963 65.6359 240.688 65.8172 241.584 65.8172C242.502 65.8172 243.28 65.4439 243.92 64.6972C244.56 63.9719 245.19 62.7986 245.808 61.1772L246.128 60.3452C246.214 60.0679 246.214 59.8119 246.128 59.5772L239.504 45.4972C239.334 45.1772 239.12 45.0172 238.864 45.0172H236.784C236.464 45.0172 236.304 44.8572 236.304 44.5372C236.304 44.2172 236.464 44.0572 236.784 44.0572H242.864C243.184 44.0572 243.344 44.2172 243.344 44.5372C243.344 44.8572 243.184 45.0172 242.864 45.0172H240.88C240.496 45.0172 240.39 45.1772 240.56 45.4972L246.608 58.1372C246.715 58.4359 246.832 58.4359 246.96 58.1372L251.856 45.4972C252.006 45.1772 251.899 45.0172 251.536 45.0172H249.552C249.232 45.0172 249.072 44.8572 249.072 44.5372C249.072 44.2172 249.232 44.0572 249.552 44.0572H255.632C255.952 44.0572 256.112 44.2172 256.112 44.5372C256.112 44.8572 255.952 45.0172 255.632 45.0172H253.552C253.275 45.0172 253.062 45.1772 252.912 45.4972L246.832 61.1772C246 63.2679 245.307 64.6119 244.752 65.2092Z"
              stroke="black"
            />
          </svg>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-500">
          Made with love for the{" "}
          <span className="font-semibold">Social Hour</span> hackathon sponsored
          by{" "}
          <a href="https://rss3.io" className="text-blue-600 hover:underline">
            RSS3
          </a>{" "}
          at{" "}
          <a
            href="https://gitcoin.co"
            className="text-blue-600 hover:underline"
          >
            Gitcoin
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
