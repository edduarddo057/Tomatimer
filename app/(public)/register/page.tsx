"use client";
import { useRouter } from "next/navigation";
import styles from "./index.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";

interface Register {
  email: string;
  password: string;
  confirm_password: string;
}

function LoginPage() {
  const router = useRouter();
  const validationSchemaLogin = Yup.object({
    email: Yup.string()
      .email("Formato de email inválido")
      .required("O email é obrigatório"),
    password: Yup.string().required("A senha é obrigatória"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), ""], "As senhas devem ser iguais")
      .required("Confirmação de senha é obrigatória"),
  });

  const formik = useFormik<Register>({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: () => {
      router.replace("/home");
    },
    validationSchema: validationSchemaLogin,
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.containerHeader}>
          <h2 className={styles.title}>Cadastrar</h2>
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
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
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
              onChange={(e) => formik.setFieldValue("password", e.target.value)}
            />
            <div className={styles.msgError}>{formik.errors.password}</div>
          </div>

          <div className={styles.passwordContainer}>
            <label htmlFor="password">Confirnar Senha</label>
            <input
              className={styles.input}
              placeholder="Confirme sua senha"
              id="password"
              type="password"
              value={formik.values.confirm_password}
              onChange={(e) =>
                formik.setFieldValue("confirm_password", e.target.value)
              }
            />
            <div className={styles.msgError}>
              {formik.errors.confirm_password}
            </div>
          </div>

          <button type="submit" className={styles.button}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
