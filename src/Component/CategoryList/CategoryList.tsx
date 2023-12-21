'use client';

import type { CategoryItem } from '@/@types/CategoryType';

import Link from 'next/link';
import styled from 'styled-components';

const CategoryListStyle = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline ${({ theme }) => theme.text};
  }
`;

const CategoryListWrapper = styled.div`
  gap: 15px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
export default function CategoryList({
  category,
}: {
  category: CategoryItem[];
}) {
  return (
    <CategoryListWrapper>
      {category.map(({ category, categoryCount }) => {
        return (
          <CategoryListStyle key={category}>
            <Link href={`/category/${category}`}>
              # {category + categoryCount}
            </Link>
          </CategoryListStyle>
        );
      })}
    </CategoryListWrapper>
  );
}
