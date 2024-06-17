# 1) Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

# 2) The Pagination class will accept 2 parameters:
#   - items (default: None): It will contain a list of contents to paginate.
#   - pageSize (default: 10): The amount of items to show in each page.
# So for example we could initialize our pagination like this:

# alphabetList = list("abcdefghijklmnopqrstuvwxyz")
# p = Pagination(alphabetList, 4)

# 3) The Pagination class will have a few methods:
#   - getVisibleItems() : returns a list of items visible depending on the pageSize
# So for example we could use this method like this:
# p.getVisibleItems() 
# # ["a", "b", "c", "d"]

#   - You will have to implement various methods to go through the pages such as:
# prevPage()
# nextPage()
# firstPage()
# lastPage()
# goToPage(pageNum)

# Here’s a continuation of the example above using nextPage and lastPage:

# alphabetList = list("abcdefghijklmnopqrstuvwxyz")
# p = Pagination(alphabetList, 4)
# p.getVisibleItems() 
# # ["a", "b", "c", "d"]
# p.nextPage()
# p.getVisibleItems()
# # ["e", "f", "g", "h"]
# p.lastPage()
# p.getVisibleItems()
# # ["y", "z"]

# Notes
#   - The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
#   - The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage()
#   - Please set the p.totalPages and p.currentPage attributes to the appropriate number as there cannot be a page 0.
#   - If a page is outside of the totalPages attribute, then the goToPage method should go to the closest page to the number provided (e.g. there are only 5 total pages, but p.goToPage(10) is given: the p.currentPage should be set to 5; if 0 or a negative number is given, p.currentPage should be set to 1).

from typing import Union

class Pagination:
    def __init__(self, items: list = None, pageSize: Union[int, float] = 10) -> None:
        self.items = items
        self.pageSize = pageSize
        self.totalPages = 5
        self.currentPage = 1
        self.allPages = {}

        for i in range(0, self.totalPages):
            self.allPages[i + 1] = self.items[:self.pageSize]
            self.items = self.items[self.pageSize:]

    def getVisibleItems(self) -> None:
        print(self.allPages[self.currentPage])

    def nextPage(self) -> 'Pagination':
        if self.currentPage < 5:
            self.currentPage += 1
        else:
            raise ValueError("You reached the last page.")

        return self
    
    def lastPage(self) -> 'Pagination':
        self.currentPage = self.totalPages
        return self
    
    def goToPage(self, page: int) -> 'Pagination':
        if not isinstance(page, int):
            raise ValueError("You must input an integer.")
        else:
            if page > self.totalPages:
                self.currentPage = self.totalPages
            elif page <= 0:
                self.currentPage = 1
            else: 
                self.currentPage = page

        return self

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

p.getVisibleItems() 

p.nextPage().nextPage()

p.getVisibleItems()

p.lastPage()

p.goToPage(10)

p.getVisibleItems()

p.goToPage(3)

p.getVisibleItems()