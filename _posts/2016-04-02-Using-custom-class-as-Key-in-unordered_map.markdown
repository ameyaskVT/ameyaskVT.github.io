---
title: "C++ – Using custom class as Key in unordered_map"
layout: post
date: 2019-04-02 11:30
tag:
- cpp
- stl
- hashing
- python
blog: true
---

Recently I was trying to use a custom class as Key in unordered_map in C++.

For custom classes to be used as keys, we need to tell C++ how to

1. hash the objects of the type and

2. how to check if two objects are equal (in case there are collisions due to the hash).

But before that let us first look into operator overloading for the function () operator. This would be needed to define the hash for the custom class.

An example of overloading () is :-


struct Accumulator
{
    int counter = 0;
    int operator()(int i) { return counter += i; }
}
...
Accumulator acc;
cout << acc(10) << endl; //prints "10"
cout << acc(20) << endl; //prints "30"
Overloading () helps to use the class as a function with arguments.

Here is how it will be useful as a functor :-


template <typename InputIterator, typename Functor>
void for_each(InputIterator first, InputIterator last, Functor f)
{
    while (first != last) f(*first++);
}

////

std::vector<int> vec;
// Fill vec

// Using a functor
Accumulator acc;
std::for_each(vec.begin(), vec.end(), acc);
Overloading () is useful :-
1. As it helps to use functors.
2. A constructor for a class can’t be used instead, because constructor can’t be made to return different types. (In this example we are returning int).
3. Lastly it will also be useful while defining a hash for a custom class.

Coming back to the discussion of hashing for custom class.

The following is a custom class we wish to hash :-


struct Key
{
  std::string first;
  std::string second;
  int         third;

  bool operator==(const Key &other) const
  { return (first == other.first
            && second == other.second
            && third == other.third);
  }
};
Overloading the ‘==’ operator above takes care of the case where there are collisions of the hash.

The hash can be defined in the following way :-



    struct KeyHasher
    {
        size_t operator()( const Key& k ) const
        {
            using std::size_t; 
            using std::hash; 
            using std::string;
            // Compute individual hash values for first, second and third
            // http://stackoverflow.com/a/1646913/126995
            size_t res = 17;
            res = res * 31 + hash<string>()( k.first );
            res = res * 31 + hash<string>()( k.second );
            res = res * 31 + hash<int>()( k.third );
            return res;
        }
    };
The unordered_map can then be finally defined as :-


std::unordered_map<Key,std::string>  m6
std::hash is actually a template in C++.
As can be seen in this example – hash<string> , hash<int> are already defined,
and hash<string>() (str) would return the hash of the string str.
If we stick to the namespace std, we can add our custom class “Key” to this template by defining struct hash<Key> instead of a struct KeyHasher, in that case we can directly use the Key in unordered_map without having to pass a struct like KeyHasher.

While overloading the operator :- a constant reference to the Key should be provided as an argument, and it should return size_t type. I think returning size_t maintains uniformity. This helps to combine hash’ of different member variables to create the hash of the composite object.

The hash of the composite object may also be created using boost library or by XORing the hash’ of the member variables  as can be seen in the stack overflow answer.

In C++ – Unless such hashing mechanism is provided for the custom class, the code won’t compile, if we try to create an unordered_map using the custom class as key.

In Python, we can put custom objects in Dictionary without explicitly defining the hash. But in those cases Python does not have a way to compare duplicate instances.

And it may create duplicate keys in the dictionary.

For example :-


class Student(object):
    name = ""
    age = 0
    major = ""

    # The class "constructor" - It's actually an initializer 
    def __init__(self, name, age, major):
        self.name = name
        self.age = age
        self.major = major
    
    def __hash__(self):
        return hash((self.name, self.age, self.major))

    def __eq__(self, other):
        return (self.name, self.age, self.major) == (other.name, other.age, other.major)

    def __ne__(self, other):
        # Not strictly necessary, but to avoid having both x==y and x!=y
        # True at the same time
        return not(self == other)

st = Student("Ben",11,"cs")
st_dup = Student("Ben", 11, "cs") #Identical to previous object


print(st)
print (st_dup)

dict = {}
print(dict)


dict[st] = 1
dict[st_dup] = 1

for student in dict:
  print(student.name)

Had we not defined the __hash__, __eq__, __ne__ functions, Python would generate its own hash for the object instances and it may lead to separate entries in the dictionary for “st” and “st_dup”.

The examples, code snippets were taken from the following two stack overflow answers :-
https://stackoverflow.com/a/17017281

https://stackoverflow.com/a/317528

https://stackoverflow.com/questions/4901815/object-of-custom-type-as-dictionary-key
