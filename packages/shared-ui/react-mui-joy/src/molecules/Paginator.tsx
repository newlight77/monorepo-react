import React, { FunctionComponent, useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { Box, IconButton, Theme } from '@mui/joy';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

const style: any = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  background-color: ${theme.vars.palette.primary.mainChannel};
  // align-content: center;
`

const pageNumberStyle: any = (theme: Theme) => css`
  padding: 0.5rem 1rem;
  // margin: 0 0.5rem;

  border-radius: 2px;
  // border: 1px solid transparent;
  color: ${theme.vars.palette.primary.softColor};
  cursor: pointer;
  /*transition: all .2s;*/

  &:hover {
    border: 0.6px solid ${theme.vars.palette.primary.outlinedHoverBorder};
    background-color: ${theme.vars.palette.primary.outlinedHoverBg};
    color: ${theme.vars.palette.primary.solidColor};
  }
`

const pageNumberSelectedStyle: any = (theme: Theme) => css`
  padding: 0.5rem 1rem;
  color: ${theme.vars.palette.primary.solidColor};
  border-radius: 2px;
  border: 1px solid ${theme.vars.palette.primary.outlinedBorder};
  background-color: ${theme.vars.palette.background.level2};

  /*transition: all .2s;*/
`

const buttonStyle: any = (theme: Theme) => css`
  padding: 0.5rem 0.5rem;
  color: ${theme.vars.palette.primary.mainChannel};
  background-color: transparent;
  border: 0;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    border: 0.6px solid ${theme.vars.palette.primary.outlinedHoverBorder};
    color: ${theme.vars.palette.primary.solidColor};
    opacity: 1;
  }

  // &:focus {
  //   outline: none;
  // }
`


const MAX_PAGES = 4;

type Props = {
  pageNbList: number[]; // list page numbers
  onSelectedPageChange: (number: number) => any;
};

export const Paginator: FunctionComponent<Props> = ({ pageNbList, onSelectedPageChange }) => {

  const [selectedPage, setSelectedPage] = useState(1);
  const [filteredRange, setFilteredRange] = useState(filterRange(selectedPage, pageNbList));

  useEffect(() => {
    // (pageNbList.filter(p => p !== selectedPage) === undefined) ? setSelectedPage(1) : setSelectedPage(selectedPage);
    setFilteredRange(filterRange(selectedPage, pageNbList));
    setSelectedPage(selectedPage);
  }, [selectedPage, pageNbList]);

  const moveToNextPage = () => {
    if (selectedPage > 1) {
      onSelectedPageChange(selectedPage - 1);
      setFilteredRange(filterRange(selectedPage, pageNbList));
      return setSelectedPage(selectedPage - 1);
    }

    return null;
  };

  const moveToPreviousPage = () => {
    if (selectedPage < pageNbList[pageNbList.length - 1]) {
      onSelectedPageChange(selectedPage + 1);
      setFilteredRange(filterRange(selectedPage, pageNbList));
      return setSelectedPage(selectedPage + 1);
    }

    return null;
  };

  const moveToPage = (page: number) => {
    onSelectedPageChange(page);
    setFilteredRange(filterRange(selectedPage, pageNbList));
    return setSelectedPage(page);
  };

  const renderPageIndicator = (page: number, index: number) => (
    <Box
      key={index}
      sx={page === selectedPage ? pageNumberSelectedStyle : pageNumberStyle}
      onClick={() => moveToPage(page)}
    >
      {page}
    </Box>
  );

  return (
    <Box sx={style}>
      {pageNbList.length > 1 ? (
        <IconButton sx={buttonStyle}
          id="next-page"
          size="sm"
          variant="plain"
          color="primary"
          aria-label="next page"
          onClick={moveToNextPage}
        >
          <NavigateBefore color='primary' />
        </IconButton>
      ) : null}

      {pageNbList.length > 1 ? renderPageIndicator(1, 0) : null}

      {pageNbList.length > MAX_PAGES ? (<Box sx={{alignSelf: 'center', margin: '0 0.5rem'}}>..</Box>) : null}

      {filteredRange.map(renderPageIndicator)}

      {pageNbList.length > MAX_PAGES ? (<Box sx={{alignSelf: 'center', margin: '0 0.5rem'}}>..</Box>) : null}

      {pageNbList.length > 1 ? renderPageIndicator(pageNbList.length, pageNbList.length-1) : null}

      {pageNbList.length > 1 ? (
        <IconButton sx={buttonStyle}
          id="previous-page"
          size="sm"
          variant="plain"
          color="primary"
          aria-label="previous page"
          onClick={moveToPreviousPage}
        >
          <NavigateNext color='primary' />
        </IconButton>

      ) : null}
    </Box>
  );
};

const filterRange = (selectedPage: number, range: number[]) => {
  let min = Math.max(1, selectedPage - MAX_PAGES/2);
  let max = Math.min(selectedPage + MAX_PAGES/2, range.length);

  const leftNotConsumed = Math.abs(MAX_PAGES/2 - (selectedPage - min)); // value between 0-MAX_PAGES/2
  const rightNotConsumed = Math.abs(MAX_PAGES/2 - (max - selectedPage)); // value between 0-MAX_PAGES/2

  const adjustedMin = Math.max(min - rightNotConsumed, 1);
  const adjustedMax = Math.min(max + leftNotConsumed, range.length);

  let newRange = [...range];

  // left
  for (let i=selectedPage-1; i > 1; i--) {
    newRange = newRange.filter(r => r > adjustedMin);
  }
  
  // right
  for (let i=selectedPage+1; i < range.length; i++) {
    newRange = newRange.filter(r => r < adjustedMax);
  }

  return newRange
      .filter(i => i !== 1)
      .filter(i => i !== range.length);
}