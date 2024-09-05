"use client";
import { ReactNode } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

interface AppTopBarProps {
  children: ReactNode;
}
export function AppTopBar({ children }: AppTopBarProps) {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.topBarContainer}>
        <div className={styles.titleContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.img}
            src="/images/LogoMini.png"
            alt="Logo tomatimer"
          />
          <div className={styles.title}>Tomatimer</div>
        </div>
        <div className={styles.stateUser}>Bem - vindo</div>
        <div className={styles.stateUser}>
          {session?.user.token ? (
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
            >
              <div className={styles.logged} onClick={() => signOut()}>
                Sair
              </div>
            </div>
          ) : (
            <div
              className={styles.unlogged}
              onClick={() => {
                router.push("/login");
              }}
            >
              Entrar
            </div>
          )}
        </div>
        {/* <div>actions</div> */}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
