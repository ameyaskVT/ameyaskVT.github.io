---
title: "STL sort with custom compare criteria"
layout: post
date: 2016-06-06 04:30
tag:
- cpp
- stl
- sorting
blog: true
---

In a recent C++ app of mine, I had to sort the elements of a vector of objects of a particular class - "Lit". The sorting of the "Lit" objects was to be done based on the number of times they appear as parts of another object of another class called "Clause". To do so I wished to use the std::sort function template.

    sort(v.begin(), v.end(), comp);

I had two classes "Clause" and "ClauseDB" . The vector of "Lit" was part of the "Clause" class and the information about the frequency of it's occurence was in "ClauseDB". I wanted to use the information stored in "ClauseDB" about the frequency of occurence of "Lit" by making use of the comp parameter supported by STL sort. 
I looked up the various ways in which comp can be used. It can either be a pointer to a function or an class which has the "()" operator overloaded. 

But in this particular case, I wished to sort elements present in class "Clause" but the sorting criteria was stored in the class "ClauseDB". So even though the sorting was not to be performed on data present in "ClauseDB", I had to make use of other information stored in it. And thus, there had to be some way of passing a reference to the "ClauseDB" object to the "comp" object. The method explained on Stack Overflow in the following link was one which I found particularly useful - http://stackoverflow.com/a/4066591/2723748 .

Accordingly, this was the way I implemented the "comp" object :- 

    struct compClauseLit {
	    ClauseDB * dbPtr;
	    compClauseLit(ClauseDB * ptr) {dbPtr = ptr;}
	    bool operator () (const Lit& a, const Lit& b)
        	{
    	    //will sort vector of lits using
    	    if( dbPtr->clauseSet[toInt(a)].size() <= dbPtr->clauseSet[toInt(b)].size() ) 
			    return true;

		    return false;
		    }
    };
    
An object of the above type could be created once during initialisation, and the same object can be used whenever a sort needs to be performed. 
The sort function was used inside a wrapper function "clauseSort" which was defined to be a friend of both the "Clause" and "ClauseDB" class. 
The sort function could be thus, implemented as I wanted to :- 

    void clauseSort(Clause * clausePtr, compClauseLit * compLits){

	    std::sort((clausePtr->lits).begin(), (clausePtr->lits).end(), *compLits);

    }
    
The key takeaway from this discussion for me was, that an object of a class which has its "()" operator overloaded can be passed as the "comp" parameter to STL sort; thus making the passing of information easier from Classes other than the STL container to be sorted, to the std::sort function as comparison criteria.
    
    
Note :- For those unfamiliar with my projects, the terms "Clause", "Lit", "ClauseDB" will not make much sense, but this post is more about the method describd in the stack overflow post. Thus, those readers can treat the terms to just mean myClassA, myClassB, etc. Those familiar with my projects will relate to the terms "clause", "ClauseDB" more easily, as they might have come across them in association with Boolean Reasoning or SAT solvers.

