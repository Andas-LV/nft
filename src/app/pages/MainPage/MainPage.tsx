import Header from "@/app/components/header/Header";
import styles from "./mainPage.module.css";
import prisma from '../../../../lib/prisma';
import Card from "@/app/components/Card/Card";

type Post = {
    id: string;
    title: string;
    content: string | null;
    published: boolean;
    authorId: string | null;
    author: { name: string | null;} | null;
    image: string | undefined;
};


async function getPosts(){
    const posts: Post[] = await prisma.post.findMany({
        where: {published: true},
        include: {
            author: {
                select: {name: true}
            }
        }
    })
    return posts;
}


async function MainPage (){
    const posts = await getPosts();
    return (
        <div className={styles.container}>
            <Header/>
            {posts.map((post) => (
                <Card
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    image={post.image}
                />
            ))}
        </div>
    )
}

export default MainPage;