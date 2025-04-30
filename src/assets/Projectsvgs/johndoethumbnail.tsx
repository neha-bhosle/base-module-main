const JohnDoneThumb = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
    <path
      d="M20 21.5C22.21 21.5 24 19.71 24 17.5C24 15.29 22.21 13.5 20 13.5C17.79 13.5 16 15.29 16 17.5C16 19.71 17.79 21.5 20 21.5ZM20 15C21.38 15 22.5 16.12 22.5 17.5C22.5 18.88 21.38 20 20 20C18.62 20 17.5 18.88 17.5 17.5C17.5 16.12 18.62 15 20 15ZM20 22.5C17.33 22.5 12 23.84 12 26.5V28H28V26.5C28 23.84 22.67 22.5 20 22.5ZM13.5 26.5C14.33 25.67 17.2 24.5 20 24.5C22.8 24.5 25.67 25.67 26.5 26.5H13.5Z"
      fill="#373E41"
    />
  </svg>
);

export default JohnDoneThumb;
