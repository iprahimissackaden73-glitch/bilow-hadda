

const Header = () => {
    return <h1>Iftiinshe Academy</h1>;
}

const Post = () => {
    return (
        <>
            <h2>React course</h2>
            <p>Course-kaan waxaad ku baran doontaa Basic React ilaa Advanced, waxaadna dhisi doontaa Project.</p>
        </>
    );
}

const Footer = () => {
    return (
        <h6>
            Copyright © 2026 Iftiinshe Academy. All rights reserved.
        </h6>
    );
}

function Blog() {
    return (
        <div>
            <Header />
            <Post />
            <Footer />
        </div>
    );
}

export default Blog;