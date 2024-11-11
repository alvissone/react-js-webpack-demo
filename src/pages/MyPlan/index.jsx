import React from 'react'
import { Spin, Descriptions, Progress } from 'antd'

const MyPlan = () => {
    // 计划开始时间
    const startTime = new Date('2024-11-10 00:00:00').getTime()
    const endDate = new Date('2025-03-01').getTime()
    const today = new Date().getTime()
    const days = Math.ceil((today - startTime)/(24*60*60*1000))
    console.log('天数：', days)
    const timeLeftForTask = Math.floor((endDate - today)/(24*60*60*1000))
    const completedQuestions = 296
    const uncompletedQuestions = 1598-completedQuestions
    const dailyQuestionCount = Math.ceil(1598/timeLeftForTask)
    const planQuestionCount = days * dailyQuestionCount
    const percent = (completedQuestions/planQuestionCount*100).toFixed(2)
    console.log('计划完成度', percent)
    const items = [
        {
            key: '1',
            label: 'UserName',
            children: <p>Alvisone Z</p>,
        },
        {
            key: '2',
            label: 'Plan Name',
            children: <p>科目一</p>,
        },
        {
            key: '3',
            label: 'Start Date',
            children: <p>2024年11月10日</p>,
        },
        {
            key: '4',
            label: 'End Date',
            children: <p>2025-03-01</p>,
        },
        {
            key: '5',
            label: 'Totol',
            children: <p>1598</p>,
        },
        {
            key: '6',
            label: 'Finish',
            children: <p>296</p>,
        },
        {
            key: '7',
            label: '剩余',
            children: <p>{uncompletedQuestions}</p>,
        },
        {
            key: '8',
            label: '剩余天数',
            children: <p>{timeLeftForTask}</p>,
        },
        {
            key: '9',
            label: '计划题数/天',
            children: <p>{dailyQuestionCount}</p>,
        },
        {
            key: '10',
            label: '计划完成度',
            children: (
                <div>
                    <Progress percent={percent}/> {percent}%
                </div>
            )
     ,
        }
    ]
    return (
        <Spin spinning={false}>
            <Descriptions
                bordered
                title='I hava a plan'
                items={items}
            />
        </Spin>
    )
}

export default MyPlan
