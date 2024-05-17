import { DotWave } from "@uiball/loaders";
import styles from "./Spinner.module.css";
import detailStyles from "../../Pages/Detail/Detail.module.css";

interface Detail {
  detail: string;
}

function Spinner(detail: Detail) {
  if (detail.detail === "detail") {
    return (
      <section className={detailStyles.detailSpinnerContainer}>
        <div className={detailStyles.detailSpinner}>
          <DotWave size={70} speed={1} color="black" />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <div className={styles.spinner}>
        <DotWave size={70} speed={1} color="black" />
      </div>
    </section>
  );
}

export default Spinner;
