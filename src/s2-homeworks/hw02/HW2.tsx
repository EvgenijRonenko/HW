import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'


export type AffairPriorityType = 'low' | 'high' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType


const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]


export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'low') {
        return affairs.filter(el => el.priority === 'low')
    }
    if (filter === 'high') {
        return affairs.filter(el => el.priority === 'high')
    }
    if (filter === 'middle') {
        return affairs.filter(el => el.priority === 'middle')
    }
    return affairs
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter((el) => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => { // need to fix any
        // need to fix
        // это просто функция стрелочник-она засетает, то что сделает deleteAffair
        // setAffairs(вызываю функцию(передаю аргументы))
        setAffairs(affairs.filter(el => el._id !== _id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    filter={filter}          // ого useState передаем!
                    setFilter={setFilter}    // ого useState передаем!
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
        </div>
    )
}

export default HW2
