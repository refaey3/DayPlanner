import React, { useState } from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import app from "../Lib/FireBase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Container = styled("div")`
  position: relative;
  width: 420px;
  height: 440px;
  background-color: hsl(214.29deg 91.3% 90.98%);
  color: black;
  margin: auto;
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 90%;
    padding: 20px;
  }
`;
const Form = styled("form")`
  width: 100%;
  padding: 40px;
`;
const Header = styled("h2")`
  font-size: 35px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
const InputContainer = styled("div")``;
const InputBox = styled("div")`
  width: 100%;
  position: relative;
  height: 40px;
  margin: 30px auto;
`;
const Input = styled("input")`
  width: 100%;
  height: 100%;
  background-color: transparent;
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0.24);
  border-radius: 40px;
  color: black;
  font-size: 14px;
  padding: 17px 45px 20px 20px;
  &::placeholder {
    color: black;
    font-size: 14px;
    letter-spacing: 0.5px;
  }
`;
const Icon = styled("i")`
  right: 20px;
  top: 50%;
  translate: 0 -50%;
  font-size: 16px;
  position: absolute;
`;
const Button = styled("button")`
  width: 100%;
  height: 45px;
  border: none;
  background: white;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  color: #777;
  font-weight: 700;
`;
const Remmber = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: -15px 0 15px;
  font-size: 15px;
`;
const Switch = styled.div`
  font-size: 14px;
  text-align: center;
  margin: 20px auto 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
export default function LoginReg({ setLog }) {
  const [isLogin, setIsLogin] = useState(true);
  const [useName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Container>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          if (isLogin) {
            try {
              await signInWithEmailAndPassword(getAuth(app), email, password);
              localStorage.setItem("isLogged", "true");
              localStorage.setItem("userEmail", email);

              setLog(false);
              navigate("/");
            } catch (e) {
              switch (e.code) {
                case "auth/user-disabled":
                  alert("تم حظر هذا الحساب");
                  break;
                case "auth/wrong-password":
                  alert("كلمة السر غير صحيح");
                  break;
                case "auth/invalid-credential":
                  alert("كلمة السر او البريد غير صحيحة");
                  break;
                case "auth/user-not-found":
                  alert("هذا المستخدم غير موجود");
                  break;
                default:
                  alert("حدث خطأ ما.");
              }
            }
          } else {
            //
            try {
              const user = await createUserWithEmailAndPassword(
                getAuth(app),
                email,
                password
              );
              setLog(false);
              localStorage.setItem("isLogged", "true");
              localStorage.setItem("userEmail", email);

              navigate("/");
              await sendEmailVerification(user.user); //
            } catch (e) {
              switch (e.code) {
                case "auth/email-already-in-use":
                  alert("يوجد حساب بهذا البريد بالفعل.");
                  break;
                case "auth/weak-password":
                  alert("كلمة السر ضعيفة");
                  break;
                case "auth/invalid-credential":
                  alert("كلمة السر او البريد غير صحيحة");
                  break;
                default:
                  alert("حدث خطأ ما.");
              }
            }
          }
        }}
      >
        <Header>{isLogin ? "Login" : "Register"}</Header>

        {!isLogin && (
          <InputBox>
            <Input
              type="text"
              placeholder="Username"
              value={useName}
              onChange={(e) => setUserName(e.target.value)}
              required
            ></Input>
            <Icon>
              <FaUser />
            </Icon>
          </InputBox>
        )}
        <InputContainer>
          <InputBox>
            <Input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Icon>
              <MdEmail />
            </Icon>
          </InputBox>
          <InputBox>
            <Input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <Icon>
              <RiLockPasswordFill />
            </Icon>
          </InputBox>
        </InputContainer>

        <Button type="submit">{isLogin ? "Login" : "Register"}</Button>
        <Switch>
          <p>{isLogin ? "Dont have acount ?" : "Already have an account?"}</p>
          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{
              cursor: "pointer",
              position: "relative",
              right: "-20px",
            }}
          >
            {isLogin ? " Register" : " Login"}
          </span>
        </Switch>
      </Form>
    </Container>
  );
}
