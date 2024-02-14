import Header from "@/app/components/header/Header";
import styles from "./mainPage.module.css";

async function MainPage (){
    return (
        <div className={styles.container}>
            <Header/>
        </div>
    )
}


export default MainPage;