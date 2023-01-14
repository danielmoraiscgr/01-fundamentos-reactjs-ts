import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
        avatarUrl: 'https://github.com/danielmoraiscgr.png',
        name: 'Daniel Morais Borges',
        role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meju portifolio. É um projeto que fiz no NLW returno, evento da Rocketseat'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')   
  },
  {
    id: 2,
    author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala Devs'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meju portifolio. É um projeto que fiz no NLW returno, evento da Rocketseat'},
      { type: 'link', content: 'diego.design/projeto01'},

    ],
    publishedAt: new Date('2022-05-10 20:00:00')
   
  }
]

export function App() {
    return (
      <div>
        <Header />
       <div className={styles.wrapper}>
        <Sidebar />
            <main>
            {posts.map( post => {
            return (
              <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
              />
            )
            })}
            </main>
       </div>
      </div>     
    )

}

