import React from 'react'
import {Article, Title, Img, Info, Body, Link} from './styles/feturedArticle'

export default function FeaturedArticle({children, ...restProps}){
    return <Article {...restProps}>{children}</Article>
}

FeaturedArticle.Title = function ArticleTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
FeaturedArticle.Img = function ArticleImg({children, ...restProps}) {
    return <Img {...restProps}>{children}</Img>
}
FeaturedArticle.Info = function ArticleInfo({children, ...restProps}) {
    return <Info {...restProps}>{children}</Info>
}
FeaturedArticle.Body = function ArticleBody({children, ...restProps}) {
    return <Body {...restProps}>{children}</Body>
}
FeaturedArticle.Link = function ArticleLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}