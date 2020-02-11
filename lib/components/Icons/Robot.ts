import { GenIcon, IconBaseProps } from "react-icons";

const RobotJson = {
  tag: "svg",
  attr: { viewBox: "0 0 32 32" },
  child: [
    {
      tag: "path",
      attr: {
        d:
          "M8.88889 23.75H12.4444V22H8.88889V23.75ZM10.6667 13.25C9.68333 13.25 8.88889 14.032 8.88889 15C8.88889 15.968 9.68333 16.75 10.6667 16.75C11.65 16.75 12.4444 15.968 12.4444 15C12.4444 14.032 11.65 13.25 10.6667 13.25ZM21.3333 13.25C20.35 13.25 19.5556 14.032 19.5556 15C19.5556 15.968 20.35 16.75 21.3333 16.75C22.3167 16.75 23.1111 15.968 23.1111 15C23.1111 14.032 22.3167 13.25 21.3333 13.25ZM30.2222 13.25H28.4444V11.5C28.4444 8.60156 26.0556 6.25 23.1111 6.25H16.8889V1.875C16.8889 1.39375 16.4889 1 16 1C15.5111 1 15.1111 1.39375 15.1111 1.875V6.25H8.88889C5.94444 6.25 3.55556 8.60156 3.55556 11.5V13.25H1.77778C0.794444 13.25 0 14.032 0 15V22C0 22.968 0.794444 23.75 1.77778 23.75H3.55556V25.5C3.55556 27.4305 5.15 29 7.11111 29H24.8889C26.85 29 28.4444 27.4305 28.4444 25.5V23.75H30.2222C31.2056 23.75 32 22.968 32 22V15C32 14.032 31.2056 13.25 30.2222 13.25ZM3.55556 22H1.77778V15H3.55556V22ZM26.6667 25.5C26.6667 26.4625 25.8667 27.25 24.8889 27.25H7.11111C6.13333 27.25 5.33333 26.4625 5.33333 25.5V11.5C5.33333 9.56953 6.92778 8 8.88889 8H23.1111C25.0722 8 26.6667 9.56953 26.6667 11.5V25.5ZM30.2222 22H28.4444V15H30.2222V22ZM19.5556 23.75H23.1111V22H19.5556V23.75ZM14.2222 23.75H17.7778V22H14.2222V23.75Z",
      },
      child: [],
    },
  ],
};

export const Robot = (props: IconBaseProps): JSX.Element =>
  GenIcon(RobotJson)(props);