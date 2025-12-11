import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useEffect, useState } from "react";
import { Photo } from "./Photo";

export function TwoColsLogin(props) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos([
      "login-welcome-1.png",
      "login-welcome-2.png",
      "login-welcome-3.png",
    ]);

    // let indexRef = { current: 0 };

    // function setImage() {
    //   if (indexRef.current == photos.length) {
    //     indexRef.current = 0;
    //   }

    //   photoRef.current.src = "";
    //   photoRef.current.src = "/login/" + photos[indexRef.current];
    //   console.log(photoRef.current.src);
    //   indexRef.current++;
    // }
    // setInterval(() => setImage(), 3000);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-8 h-full">
      {/* Login form */}
      <div className="flex flex-col justify-center bg-white py-12 px-20 rounded-2xl lg:col-start-2 lg:col-span-3">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/login/Gotoplaces-white-bg.png"
            width={130}
            alt="Gotoplaces logo"
          />
        </div>

        <p className="text-center text-[45px] mt-5 font-medium">Share your best moments</p>

        <div className="flex items-center gap-x-10 justify-center">
          <div className="rounded-md xl:col-span-1 xl:col-start-3 flex-1">
            <div className="flex flex-col gap-2.5">
              <p className="text-lg text-gray-800 text-center font-light">
                Whether you enjoy foods or get nice pictures at any places,
                let's share to others, they would love it too!
              </p>
            </div>
            <form action={props.login} className="flex flex-col mt-10">
              <div className="flex flex-col">
                <label htmlFor="username">Username:</label>

                <input
                  type="text"
                  name="username"
                  id="username"
                  className="p-2.5 w-full rounded-lg border-black border-2"
                  required
                />
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="password">Password:</label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  className="p-2.5 w-full rounded-lg border-black border-2"
                  required
                  minLength={8}
                  maxLength={30}
                />
              </div>
              {props.authResults && (
                <p className="text-red-500">{props.authResults}</p>
              )}
              <button
                type="submit"
                className="mt-5 bg-branding-primary hover:bg-branding-secondary py-3 text-white font-bold rounded-lg"
              >
                Sign in
              </button>
              <p
                className={`text-center flex items-center gap-x-5 text-gray-700 mt-10 ${props.styles.line}`}
              >
                <span className="whitespace-nowrap">Or register with</span>
              </p>
              <div className="flex gap-y-3 mt-5 gap-x-3">
                <a
                  href="/login/guest"
                  className="flex-1 flex justify-center items-center gap-x-3 py-3 border border-gray-800 rounded"
                >
                  <AccountCircleOutlinedIcon /> Guest
                </a>
                <a
                  href="/login/google"
                  className="flex-1 flex justify-center items-center gap-x-3 py-3 border border-gray-800 rounded"
                >
                  <GoogleIcon /> Google
                </a>
                <a
                  href="/login/github"
                  className="flex-1 flex justify-center items-center gap-x-3 py-3 border border-gray-800 rounded"
                  target="_blank"
                >
                  <GitHubIcon /> Github
                </a>
              </div>
              <div className="flex justify-center mt-5 gap-x-1">
                <p>Don't have an account?</p>
                <Link className="text-center" to="/sign-up">
                  <span className="underline underline-offset-3 text-branding-primary">
                    Sign up with email
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Side image */}
      <div className="lg:col-start-5 lg:col-span-3 max-h-dvh flex">
        <div className="p-5 max-h-dvh flex relative">
          <p className="absolute bottom-5 rounded-4xl text-white pl-12 pr-20 xl:pr-48 left-5 right-5 xl:pb-14 xl:text-xl flex flex-col bg-gradient-to-t from-zinc-950 to-transparent">
            <FormatQuoteIcon fontSize="large" className="rotate-y-180" />
            <span>
              Dưới ánh hoàng hôn rực rỡ bên sông Sài Gòn, em cảm thấy hạnh phúc
              vô ngần khi được nắm tay anh. Thành phố hiện đại với những tòa nhà
              cao tầng làm nền cho khoảnh khắc này thêm phần lãng mạn. Em quay
              lại nhìn anh, nụ cười trên môi em chính là niềm vui chân thật
              nhất. Cảm ơn anh đã cùng em tạo nên một kỷ niệm tuyệt vời tại nơi
              này.
            </span>
            <span className="mt-5">Phạm Ngọc Lan Chi</span>
            <span>Kiến trúc sư cảnh quan.</span>
          </p>
          {/* <img
            ref={photoRef}
            className="object-cover rounded-4xl"
            src="/login/login-welcome-1.png"
            alt="Scene 1"
          /> */}
          <div className="flex overflow-clip">
            {photos.map((photo, i) => (
              <Photo key={i} src={`/login/${photo}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
