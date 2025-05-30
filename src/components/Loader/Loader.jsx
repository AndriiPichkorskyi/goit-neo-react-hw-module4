import { Triangle } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader({ visible }) {
    return <Triangle visible={visible} height="80" width="80" color="var(--white)" ariaLabel="triangle-loading" wrapperClass={css.loader} />;
}
