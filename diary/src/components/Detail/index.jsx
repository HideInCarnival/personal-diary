import React, { useEffect, useState } from 'react'
import NavBar from 'antd-mobile/lib/nav-bar'
import Icon from 'antd-mobile/lib/icon'
import List from 'antd-mobile/lib/list'

import { analysisQuery } from '../../utils'
import './index.css'
import axios from '../../service';
export default function Detail(props) {
    const history = props.history;
    const search = analysisQuery(props.location);
    const id = search.id;
    const [detail, setDetail] = useState({});
    useEffect(() => {
        axios.get(`/detail/${id}`).then(({data}) => {
            setDetail(data);
        })
    },[id]);
    const deleteDiary = (id) => {
        const isDel = window.confirm('确认删除');
        if (isDel) {
            axios.post('/delete', { id }).then((data) => {
                history.push('/');
            })
        }
    }
    return (
        <div className="diary-detail">
            <NavBar
                icon={<Icon type="left" />}
                onLeftClick={() => history.goBack()}
                rightContent={[<Icon type="cross" key="0" onClick={()=>{deleteDiary(detail.ID)}} />,
                <Icon type="ellipsis" key="1" onClick={() => history.push(`/editor?id=${detail.ID}`)} />
                ]}
            >
                {detail.title}
            </NavBar>
            <List renderHeader={() => detail.date} className="my-list">
                <List.Item wrap>
                    {detail.content}
                </List.Item>
            </List>
        </div>
    )
}
