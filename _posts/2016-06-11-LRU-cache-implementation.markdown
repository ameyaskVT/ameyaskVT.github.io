---
title: "STL sort with custom compare criteria"
layout: post
date: 2016-06-11 16:30
tag:
- cpp
- stl
- lrucache
blog: true
---

I recently implemented a Least Recently Used cache as practice on [leetcode](http://leetcode.com "Title"). Here's the [link](https://github.com/ameyaskVT/algoDataStructuresPractice/blob/master/leastRecentlyUsedCache.cpp "Title") to the implementation. My initial implementation was clocking 120ms runtime for 17 test cases and I was trying to optimise it further. I was initially using the std::map data structure for storing the keys in the cache. Changing it to std::unordered_ map brought down the runtime from 120ms to 88ms. What I learned from this is that the right data structure and algorithm makes the biggest difference to the program. As it turns out, the implementation of a map is a BST while that of an unordered_ map is a hash table. Thus, unless there are too many hash collisions one can expect O(1) lookup times for std::unordered_ map, but it will always be O(log n) for std::map. This stack overflow [post](http://stackoverflow.com/questions/13799593/how-to-choose-between-map-and-unordered-map/13799886#13799886 "Title") is useful.
