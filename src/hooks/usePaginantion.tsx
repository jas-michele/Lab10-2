import { useState } from "react";

export function usePagination(totalItems: number, itemsPerPage: number = 10, initialPage: number = 1) {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const itemsOnCurrentPage = Math.min( itemsPerPage, totalItems - startIndex);

    const setPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page)
    }

    const nextPage = () => setPage(currentPage + 1);
    const prevPage = () => setPage(currentPage - 1);

    const canNextPage = currentPage < totalPages;
    const canPrevPage = currentPage > 1;

}