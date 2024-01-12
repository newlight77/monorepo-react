import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { Box, Input, Theme } from '@mui/joy';
import { Paginator } from '../molecules';
import { Search } from '@mui/icons-material';


const style: any = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const headerStyle: any = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem 2rem;
    background-color: ${theme.vars.palette.background.backdrop};
`

const headerTitleStyle: any = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.5rem 0.5rem;
    margin: 0.5rem 0rem 1.5rem 0rem;
    background-color: ${theme.vars.palette.background.backdrop};
`

const dataGridStyle: any = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem 2rem;
    align-items: center;
    background-color: ${theme.vars.palette.background.surface};
`

const paginatorStyle: any = (theme: Theme) => css`
    display: flex;
    width: 100%;
    padding: 0rem 0rem 2rem 0rem;
    justify-content: space-around;
    background-color: ${theme.vars.palette.background.surface};
`

const columnNamesStyle: any = (theme: Theme) => css`
    display: flex;
    width: 100%;
    background-color: ${theme.vars.palette.background.backdrop};
`

const columnNameCellStyle: any = (theme: Theme) => css`
    padding: 0.5rem 1rem;
    width: 100%;
    border: 1px solid ${theme.vars.palette.primary.outlinedBorder};
    color: ${theme.vars.palette.primary.softColor};
`

const rowStyle: any = (theme: Theme) => css`
    display: flex;
    width: 100%;
    background-color: ${theme.vars.palette.primary.mainChannel};
`

const rowCellStyle: any = (theme: Theme) => css`
    padding: 0.5rem 1rem;
    width: 100%;
    border: 1px solid ${theme.vars.palette.primary.outlinedBorder};
    color: ${theme.vars.palette.primary.plainColor};
`

interface Props extends React.PropsWithChildren {
    rowsDataSource: ((criteria: DataTableSearchCriteria) => any[]),
    nbPerPage: number,
    columnsDef: DataTableColumnDef[],
    header?: string | string[] | React.ReactElement | React.ReactElement[],
    children?: string | string[] | React.ReactElement | React.ReactElement[],
}

export type DataTableSearchCriteria = {
    keyword: string,
}

export type DataTableColumnDef = {
    field: string,
    headerName: string,
    body?: (rowData: any) => React.ReactElement
}

export const DataTable: React.FC<Props> = ({ rowsDataSource, nbPerPage, columnsDef, header, children }: Props) => {

    // type ContentType = keyof typeof dataSource;

    const initFilter = {
        keyword: '',
        page: 1,
        start: 0,
    }

    const initRows: any[] = rowsDataSource(initFilter);

    const [rows, setRows] = useState(initRows);
    const [filter, setFilter] = useState(initFilter);

    useEffect(() => {
        const data = rowsDataSource(filter);
        setRows(data);
    }, [rowsDataSource, filter]);

    const pageNbList = computePageNbList(rows.length, (nbPerPage));

    const handlePageChosen = (page: number) => {
        const start = nbPerPage * page;
        setFilter({
            ...filter,
            page: page,
            start: start,
        });
    };

    const onSearchChange = (event: any) => {
        setFilter({
            ...filter,
            keyword: event.target.value,
        })
    }

    // type ColumnType = keyof typeof columns;

    const renderColumnNamesRow = () => (
        <Box key={'column names'} sx={columnNamesStyle}>
            {columnsDef.map((c: DataTableColumnDef) =>
                <Box key={c.field} sx={columnNameCellStyle}>{c.headerName}</Box>
            )}
        </Box>
    );

    const renderDataRow = (row: any, index: number) => {
        if (index < filter.start) return <div key={index}></div>;
        if (index > filter.start+nbPerPage) return <div key={index}></div>;
        
        return (
            <Box key={index} sx={rowStyle}>
                {columnsDef.map((c: DataTableColumnDef) =>
                    <Box key={c.field} sx={rowCellStyle}>{row[c.field]}</Box>
                )}
            </Box>
        )
        
    };

    return (
        <Box about='data table' sx={style}>
            <Box about='data table header' sx={headerStyle}>
                <Box about='header' sx={headerTitleStyle}>
                    {header}
                </Box>
                <Box about='filter'>
                    <Input
                        type='text'
                        value={filter.keyword}
                        onChange={onSearchChange}
                        startDecorator={<Search/>}
                    ></Input>
                </Box>
            </Box>
            {/* <Divider></Divider> */}
            <Box about='data grid' sx={dataGridStyle}>
                {renderColumnNamesRow()}
                {rows.map(renderDataRow)}
            </Box>
            <Box about='paginator' sx={paginatorStyle}>
                <Paginator
                    onSelectedPageChange={(page) => handlePageChosen(page)}
                    pageNbList={pageNbList}
                />
            </Box>
        </Box>
    );
}


const computePageNbRange = (length: number) => Array.from({ length }, (v, k) => k + 1);

const computePageNbList = (total: number, nbPerPage: number) => {
    const rangeLimit = Math.floor(total / nbPerPage);
    return computePageNbRange(rangeLimit);
}
