import React,{ useState, useRef, useEffect } from 'react'
import Icon from 'antd-mobile/lib/icon'
import Button from 'antd-mobile/lib/button'
import ImagePicker from 'antd-mobile/lib/image-picker'
import Toast from 'antd-mobile/lib/toast'
import './index.css'
import { getDate, analysisQuery } from '../../utils';
import axios from '../../service';
export default function Editor(props) {
    const history = props.history;
    const id = analysisQuery(props.location, 'id').id;
    const titleInput = useRef();
    const contentInput = useRef();
    const [title, setTitle] = useState(''); //设置标题
    const [content, setContent] = useState(''); //设置主要内容
    const [date, setDate] = useState('');
    const [files, setFile] = useState([]) //设置图片文件
    const onChange = (files) => {
        setFile(files);
    }
    useEffect(()=> {
        if (id) {
            axios.get(`/detail/${id}`, { id }).then(({data}) => {
                if (data) {
                    setTitle(data.title);
                    setContent(data.content);
                    setDate(data.date);
                    setFile([{url: data.url}]);
                }
            });
        }   
    },[id])
    const submit = () => {
        if (!title || !content) {
            Toast.fail('缺少标题或内容');
            return
        }
        const diary = {
            title,
            content,
            date: date || getDate(),
            url: files.length ? files[0].url : 'http://img4.imgtn.bdimg.com/it/u=1713396441,1487163637&fm=26&gp=0.jpg'
        }
        if (id) {
            diary.id = id;
        }
        const api = id ? '/update' : '/add';
        axios.post(api, diary).then(res => {
            if (res.status === 200) {
                Toast.success('编辑成功');
                history.push('/');
            }else {
                Toast.fail('编辑失败');
            }
        })
    };
    return (
        <div className="diary-editor">
            <header>
                <div className="icon">
                    <Icon type='left' 
                        onClick={()=>{history.push('/')}}
                    />
                </div>
                <div className="block">
                    编辑日记
                </div>
            </header>
            <div className="set-title">
                <span>标题</span>
                <input type="text" placeholder="请输入标题" value={title?title:''} ref={titleInput} onChange={() => {setTitle(titleInput.current.value)}} />
            </div>
            <div className="textarea">
                <textarea 
                    placeholder="请输入内容"
                    value={content?content:''}
                    rows={15}
                    ref={contentInput}
                    onChange={() => {setContent(contentInput.current.value)}}
                />
            </div>
            <div className="image-picker">
                <ImagePicker 
                    files={files}
                    onChange={onChange}
                    multiple={files.length < 1}
                    selectable={true}
                />
            </div>
            <div className="submit">
                <Button
                    icon="check"
                    onClick={() => {submit()}}
                >提交</Button>
            </div>
        </div>
    )
}
