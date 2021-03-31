import {MainLayout} from '../../layouts/MainLayout'

export default function About({title}) {
    return (
        <MainLayout title={'About Page'}>
            <h1>{title.title}</h1>
            <hr></hr>
            <p>{title.body}</p>
        </MainLayout>
    )


}
About.getInitialProps = async () => {
    const res = await fetch('http://localhost:4200/about')
    const title = await res.json()
    return {title}
}