import * as React from "react";
import "./Page.css";
import { createCn } from 'bem-react-classname';

class Page extends React.Component {
    render() {
        const cn = createCn('page');
        return (
            <section className={cn()}>
                Hello, page!
            </section>
        );
    }
}

export default Page