"use client";
import { signIn } from "next-auth/react";
import styles from "./index.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toastMessage } from "@/function/toast/toast";
import { useState } from "react";
import { Spinnner } from "@/app/components/spinner";

interface Login {
  email: string;
  password: string;
}

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const validationSchemaLogin = Yup.object({
    email: Yup.string()
      .email("Formato de email inválido")
      .required("O email é obrigatório"),
    password: Yup.string().required("A senha é obrigatória"),
  });

  const formik = useFormik<Login>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (e) => {
      if (e.email && e.password) {
        router.push("/home");
      }
    },
    validationSchema: validationSchemaLogin,
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.containerHeader}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            width={50}
            height={50}
            src="/images/Logo.png"
            alt="Logo da tomatimer"
            className={styles.img}
          />
          <div className={styles.titleConteiner}>
            <h2 className={styles.title}>Tomatimer</h2>
            <h3 className={styles.subtitle}>Entrar</h3>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.emailContainer}>
            <label htmlFor="email">E-mail</label>
            <input
              className={styles.input}
              placeholder="Digite seu email"
              id="email"
              type="text"
              value={formik.values.email}
              onChange={(e) => {
                formik.setFieldValue("email", e.target.value);
              }}
            />
            <div className={styles.msgError}>{formik.errors.email}</div>
          </div>

          <div className={styles.passwordContainer}>
            <label htmlFor="password">Senha</label>
            <input
              className={styles.input}
              placeholder="Digite sua senha"
              id="password"
              type="password"
              value={formik.values.password}
              onChange={(e) => {
                formik.setFieldValue("password", e.target.value);
              }}
            />
            <div className={styles.msgError}>{formik.errors.password}</div>
          </div>

          <div className={styles.actions}>
            <Link href={"/register"} className={styles.linkRegister}>
              <div className={styles.linkRegisterLabel}>Cadastre-se</div>
            </Link>

            <button type="submit" className={styles.button}>
              {loading ? <Spinnner /> : "Entrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
