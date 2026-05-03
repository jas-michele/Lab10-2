import { useState } from "react";

export function usePagination(totalItems: number, itemsPerPage: number = 10, initialPage: number = 1) {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

}