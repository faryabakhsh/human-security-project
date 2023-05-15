import { useRouter } from "next/router";
import articleData from "../../data/blogs.json";
import Link from "next/link";
import styles from "./article.module.css";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

import Image from "next/image";

export function getStaticProps(staticProps: { params: any }) {
  const params = staticProps.params;
  return {
    props: {
      article: articleData.find((article) => {
        return article.id.toString() === params.id;
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = articleData.map((article) => {
    return {
      params: {
        id: article.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

const article = (props: {
  article: {
    name: string;
    id: number;
    bibliography: any;
    imgUrl: string;
  };
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  if (router.isFallback) {
    return <div>...loading</div>;
  }

  return (
    <div className={styles.sectionblack}>
      {/* article page {router.query.id} */}
      <Link style={{ color: "rgb(161, 9, 161)" }} href="/">
        back to home
      </Link>
      <p style={{ color: "#3d99be", fontSize: "40px", fontWeight: "bold" }}>
        {props.article.name}
      </p>
      <Image
        src={props.article.imgUrl}
        alt="img url"
        width={800}
        height={800}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <h2 style={{ color: "white" }}>Bibliography</h2>
      <div style={{ color: "white" }} className={styles.skillsList}>
        {props.article.bibliography.map(
          (
            text:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined
          ) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <ul className={styles.li}>
                <li>{text}</li>
              </ul>
            );
          }
        )}
      </div>
    </div>
  );
};

export default article;
