import CoursesComponent from "./CoursesComponent";
import DepartmentComponent from "./DepartmentsComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function AppComponent(){
    return(
        <>
            <HeaderComponent/>
            <DepartmentComponent/>
            <CoursesComponent/>
            <FooterComponent/>   
        </>
    )
}
export default AppComponent;

