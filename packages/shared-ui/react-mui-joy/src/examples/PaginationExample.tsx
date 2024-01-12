import React, { useState, useEffect } from 'react';
import { Paginator } from '../molecules';

export const MAX_PER_PAGE = 10;

type Content = {
    id: string,
    title: string,
    subTitle: string,
    content: string,
    link: string
}

type Filter = {
    skip: number,
    page: number,
    limit: number
}

const createContent = (id: string) => (
    {
        id: id,
        title: `title ${id}`,
        subTitle: `subTitle ${id}`,
        content: `content ${id}`,
        link: `link ${id}`,
    }
)

const initFilter: Filter = {
    skip: 0,
    page: 1,
    limit: 5
}

const initResults: Content[] = [];

const allContents: Content[] = [
    createContent('-11'), createContent('-12'), createContent('-13'), 
    createContent('-21'), createContent('-22'), createContent('-23'), 
    createContent('-31'), createContent('-32'), createContent('-33'), 
    createContent('-41'), createContent('-42'), createContent('-43'), 
    createContent('-51'), createContent('-52'), createContent('-53'), 
    createContent('-61'), createContent('-62'), createContent('-63'), 
    createContent('-71'), createContent('-72'), createContent('-73'), 
    createContent('-81'), createContent('-82'), createContent('-83'), 
    createContent('-91'), createContent('-92'), createContent('-93'), 
];

const cards = (entries: Content[]) => entries.map((entry, index) => (
    <div key={index}>
        <div>{entry.id}</div>
        <div>{entry.title}</div>
        <div>{entry.subTitle}</div>
        <div>{entry.content}</div>
        <div>{entry.link}</div>
    </div>
));

export const PaginationExample: React.FC = () => {

    const [contents, setContents] = useState(initResults);
    const [filter, setFilter] = useState(initFilter);

    useEffect(() => {
        setContents(allContents);
    }, [contents]);

    const handlePageChosen = (page: number) => {
        setFilter({
            page: page,
            skip: (page - 1) * MAX_PER_PAGE,
            limit: filter.limit
        });
    };

    const range = getRange(allContents.length, 5);

    return (
        <div>
            <h1 className="header">All contents</h1>
            <div className="cards">{cards(contents)}</div>
            <Paginator
                onSelectedPageChange={(event) => handlePageChosen(event)}
                pageNbList={range}
            />
        </div>
    );
}

const calculateRange = (length: number) => Array.from({ length }, (v, k) => k + 1);

const getRange = (total: number, nbPerPage: number) => {
    const rangeLimit = Math.ceil(total / nbPerPage);
    return calculateRange(rangeLimit);
}
