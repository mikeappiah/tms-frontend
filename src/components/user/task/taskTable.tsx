"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function TaskTable({ heading }: Readonly<{ heading: string }>) {
  const [expanded, setExpanded] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-sm border text-sm">
      <div className="flex items-center p-2 sm:p-3 border-b">
        <button
          onClick={() => setExpanded(!expanded)}
          className="mr-2 text-gray-500 hover:text-gray-700"
        >
          {expanded ? (
            <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
          ) : (
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          )}
        </button>
        <h2 className="text-sm font-medium">{heading}</h2>
        <Badge
          variant="secondary"
          className="ml-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-100 text-xs"
        >
          3
        </Badge>
        <button className="ml-auto text-gray-500 hover:text-gray-700">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {expanded && (
        <>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-xs text-gray-500">
                  <th className="w-8 p-2 sm:p-3">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 h-3 w-3"
                      />
                    </div>
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium">
                    <div className="flex items-center">
                      <span className="text-gray-600 text-xs">Task Name</span>
                    </div>
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium hidden sm:table-cell">
                    <div className="flex items-center">
                      <span className="text-gray-600 text-xs">Description</span>
                    </div>
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium hidden md:table-cell">
                    <div className="flex items-center">
                      <span className="text-gray-600 text-xs">Estimation</span>
                    </div>
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium hidden sm:table-cell">
                    <div className="flex items-center">
                      <span className="text-gray-600 text-xs">Type</span>
                    </div>
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium">
                    <div className="flex items-center">
                      <span className="text-gray-600 text-xs">People</span>
                    </div>
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium">
                    <div className="flex items-center">
                      <span className="text-gray-600 text-xs">Priority</span>
                    </div>
                  </th>
                  <th className="w-8 p-2 sm:p-3">
                    <button className="text-gray-500 hover:text-gray-700">
                      <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Task 1 */}
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2 sm:p-3">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 h-3 w-3"
                      />
                    </div>
                  </td>
                  <td className="p-2 sm:p-3 font-medium text-xs">
                    Employee Details
                  </td>
                  <td className="p-2 sm:p-3 text-gray-600 text-xs hidden sm:table-cell">
                    Create a page where there is information about employees
                  </td>
                  <td className="p-2 sm:p-3 text-gray-600 text-xs hidden md:table-cell">
                    Feb 14, 2024 - Feb 1, 2024
                  </td>
                  <td className="p-2 sm:p-3 hidden sm:table-cell">
                    <Badge
                      variant="outline"
                      className="bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-100 text-xs px-1.5 py-0.5"
                    >
                      <span className="mr-1">◻</span> Dashboard
                    </Badge>
                  </td>
                  <td className="p-2 sm:p-3">
                    <div className="flex items-center">
                      <div className="flex -space-x-1.5">
                        <Avatar className="h-5 w-5 border-2 border-white">
                          <AvatarFallback className="bg-green-100 text-[8px] text-green-800">
                            AL
                          </AvatarFallback>
                        </Avatar>
                        <Avatar className="h-5 w-5 border-2 border-white">
                          <AvatarFallback className="bg-green-100 text-[8px] text-green-800">
                            DT
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 sm:p-3">
                    <Badge
                      variant="outline"
                      className="bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-100 text-xs px-1.5 py-0.5"
                    >
                      <span className="mr-1 text-orange-500">●</span> Medium
                    </Badge>
                  </td>
                  <td className="p-2 sm:p-3">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </td>
                </tr>

                {/* Task 2 */}
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2 sm:p-3">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 h-3 w-3"
                      />
                    </div>
                  </td>
                  <td className="p-2 sm:p-3 font-medium text-xs">
                    Darkmode version
                  </td>
                  <td className="p-2 sm:p-3 text-gray-600 text-xs hidden sm:table-cell">
                    Darkmode version for all screens
                  </td>
                  <td className="p-2 sm:p-3 text-gray-600 text-xs hidden md:table-cell">
                    Feb 14, 2024 - Feb 1, 2024
                  </td>
                  <td className="p-2 sm:p-3 hidden sm:table-cell">
                    <Badge
                      variant="outline"
                      className="bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-100 text-xs px-1.5 py-0.5"
                    >
                      <span className="mr-1">◼</span> Mobile App
                    </Badge>
                  </td>
                  <td className="p-2 sm:p-3">
                    <div className="flex items-center">
                      <div className="flex -space-x-1.5">
                        <Avatar className="h-5 w-5 border-2 border-white">
                          <AvatarFallback className="bg-green-100 text-[8px] text-green-800">
                            AL
                          </AvatarFallback>
                        </Avatar>
                        <Avatar className="h-5 w-5 border-2 border-white">
                          <AvatarFallback className="bg-green-100 text-[8px] text-green-800">
                            DT
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 sm:p-3">
                    <Badge
                      variant="outline"
                      className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100 text-xs px-1.5 py-0.5"
                    >
                      <span className="mr-1 text-blue-500">●</span> Low
                    </Badge>
                  </td>
                  <td className="p-2 sm:p-3">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </td>
                </tr>

                {/* Task 3 */}
                <tr className="hover:bg-gray-50">
                  <td className="p-2 sm:p-3">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 h-3 w-3"
                      />
                    </div>
                  </td>
                  <td className="p-2 sm:p-3 font-medium text-xs">
                    Super Admin Role
                  </td>
                  <td className="p-2 sm:p-3 text-gray-600 text-xs hidden sm:table-cell">
                    -
                  </td>
                  <td className="p-2 sm:p-3 text-gray-600 text-xs hidden md:table-cell">
                    Feb 14, 2024 - Feb 1, 2024
                  </td>
                  <td className="p-2 sm:p-3 hidden sm:table-cell">
                    <Badge
                      variant="outline"
                      className="bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-100 text-xs px-1.5 py-0.5"
                    >
                      <span className="mr-1">◻</span> Dashboard
                    </Badge>
                  </td>
                  <td className="p-2 sm:p-3">
                    <div className="flex items-center">
                      <div className="flex -space-x-1.5">
                        <Avatar className="h-5 w-5 border-2 border-white">
                          <AvatarFallback className="bg-green-100 text-[8px] text-green-800">
                            AL
                          </AvatarFallback>
                        </Avatar>
                        <Avatar className="h-5 w-5 border-2 border-white">
                          <AvatarFallback className="bg-green-100 text-[8px] text-green-800">
                            DT
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 sm:p-3">
                    <Badge
                      variant="outline"
                      className="bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-100 text-xs px-1.5 py-0.5"
                    >
                      <span className="mr-1 text-orange-500">●</span> Medium
                    </Badge>
                  </td>
                  <td className="p-2 sm:p-3">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t p-2 text-xs">
            <div className="text-gray-500">
              Showing page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="outline"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-3 w-3" />
                <span className="sr-only">Previous</span>
              </Button>

              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  className="h-6 w-6 p-0 text-xs"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-3 w-3" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
