import Head from 'next/head'
import Router from 'next/router'

export function MainLayout({children, title='New Page'}) {
    return (
        <>
       <Head>
            <title>{title}</title>
            <meta charSet="utf-8"></meta>
            <meta nam="keywords" content="next.js, js"></meta>
        </Head>
        
        <nav>
            <div>
            <br></br><br></br>
            <h1>Nav Bar</h1>
            <button className="buttonRef" onClick={() => Router.push('/')}>Go to Home</button>
            <button className="buttonRef" onClick={() => Router.push('/fuck')}>Go to Fuck</button>
            <button className="buttonRef" onClick={() => Router.push('/about')}>Go to About</button>


            </div>
        </nav>
        <br></br><br></br><br></br><br></br><br></br>
        <main> 
            {children}
        </main>

        <style jsx global>{`
        nav {
            position: fixed;
            height: 60px;
            left: 0;
            right: 0;
            top: 0;
            background: #348feb; 
            display: flex;
            jusify-content: space-around;
            align-items: center;
        }
        .buttonRef {
            background: #34e5eb;
        }
        `}
        </style>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
        </>
    )
}