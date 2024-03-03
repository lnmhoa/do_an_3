
import { useEffect } from "react";
function ProfilePage() {
    let defaultTitle = "Giới thiệu"
    useEffect(() => {
        document.title = defaultTitle;
      }, [defaultTitle]);
    return ( <><h1>ProfilePage</h1></> );
}

export default ProfilePage;