"use client";
import styles from "./index.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { redirect, useRouter } from "next/navigation";
import { postRegisterUser } from "@/service/register";
import { toastMessage } from "@/function/toast/toast";

interface Register {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

function LoginPage() {
  const router = useRouter();
  const validationSchemaLogin = Yup.object({
    name: Yup.string().required("O nome não pode ser vazio"),
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
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: (data) => {
      // postRegisterUser({
      //     email: data.email,
      //     password: data.password,
      //     name: data.name
      // })
      //     .then(() => {
      //         console.log('deu bão');
      //         toastMessage({
      //             msg: 'Sucesso ao realizar o cadastro do usuário',
      //             type: 'success'
      //         });
      //         redirect('/login');
      //     })
      //     .catch(() => {
      //         toastMessage({
      //             msg: 'Erro ao realizar o cadastro do usuário tente novamente',
      //             type: 'error'
      //         });
      //     });
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
            <label htmlFor="name">Name</label>
            <input
              className={styles.input}
              placeholder="Digite seu name"
              id="name"
              type="text"
              value={formik.values.name}
              onChange={(e) => formik.setFieldValue("name", e.target.value)}
            />
            <div className={styles.msgError}>{formik.errors.name}</div>
          </div>

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
