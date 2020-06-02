import React, { useState, useEffect } from 'react'
import Card from '../Card'
import Button from 'antd-mobile/lib/button'
import { Link } from 'react-router-dom'
import './index.css'
import axios from '../../service';
export default function Home(props) {
    const history = props.history;
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('/list').then(({data}) => {
            setList(data);
        });
    }, []);
    const diaryList = list.map( (item, index) => (
            <Link to={ { pathname:"/detail", search:`?id=${item.ID}`} } key= {index}>
                <Card className="diary-item">
                    <Card.Header 
                        title = {<span className="title">{ item.title }</span>}
                        thumb = { item.url }
                        extra = {<span>{ item.date}</span>}
                    />
                    <Card.Body>
                        { item.content }
                    </Card.Body>
                    <Card.Footer 
                        content = "还不知道这页脚有啥用"
                        extra = {<span>就先这样吧</span>}
                    />
                </Card>
            </Link>
    ))
    return (
        <div className="diary-list">
            { diaryList }
            <div className="add">
            <Button
                icon="check"
                onClick={() => {history.push('/editor')}}
            >添加</Button>
            </div>
        </div>
    )
}
