import { Header } from '../components/Header'
import { SideNav } from '../components/SideNav'
import { Content } from '../components/Content/Content'
export function Home() {
    return (
        <div id="home-page">
            <Header />
            <div className="div-row">
                <SideNav />
                <Content />
            </div>
        </div>
    )
}