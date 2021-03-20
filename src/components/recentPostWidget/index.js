import React from 'react'
import {Container, Title, Image} from './styles/widgetRecentPost'

export default function RecentPostWidget({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

RecentPostWidget.Title = function RecentPostWidgetTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

RecentPostWidget.Image = function RecentPostWidgetImage({children, ...restProps}) {
    return <Image {...restProps}>{children}</Image>
}