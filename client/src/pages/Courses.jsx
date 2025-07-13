import { useState, useMemo } from 'react';
import CourseCard from '../components/UI/cards/CourseCard';
import { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { fetchCourses,fetchCategory } from '../api/courses';
import clsx from 'clsx';
function Courses() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [search, setSearch] = useState('');
  const [page,setPage] = useState(1);
  const limit = 6;
  const {
    data:courseData,
    isLoading,
    isError
  } = useQuery({
    queryKey:['courses',page],
    queryFn: () => fetchCourses({page,limit}),
    keepPreviousData:true,
    staleTime:1000*60*5,
  });
  const {
    data:categories,
  } =  useQuery({
    queryKey:['categories'],
    queryFn: fetchCategory,
    staleTime:1000*60*5,
  });
  const courses = courseData?.courses;
  const totalPages = courseData?.totalPages;
  const handleCategorySelection = (value)=>{
    setSelectedCat(value);
  }

const filterCourses = useMemo(()=>{
  if(selectedCat && search){
    if(selectedCat === 'all') return courses.filter(course => (course?.title).toLowerCase().includes(search.toLowerCase()));
    return courses.filter(course=>course?.category?.name===selectedCat && (course?.title).toLowerCase().includes(search.toLowerCase()));
  }else{
    if(selectedCat === 'all') return courses;
    return courses.filter(course=>course?.category?.name===selectedCat);
  }

  },[categories,selectedCat,isLoading,search,page]);

   const getPageButtons = () => {
    const buttons = [];
    const maxButtons = 4;

    let start = Math.max(1, page - 1);
    let end = Math.min(totalPages, start + maxButtons - 1);

    if (end - start + 1 < maxButtons) {
      start = Math.max(1, end - maxButtons + 1);
    }

    for (let i = start; i <= end; i++) {
      buttons.push(i);
    }

    return buttons;
  };

  const pages = getPageButtons();
  return (
    <>
      <section id="breadcrumb" className='h-14 bg-[var(--clr-accent-100)]'>
        <nav aria-label='Breadcrumb' className='container flex items-center h-full text-[var(--clr-primary-900)]'>
          <ol className='flex gap-x-1 '>
            <li><a href="/">Home</a></li>
            <li aria-hidden="true">›</li>
            <li><a className='text-[var(--clr-accent-900)]' href="/courses">Courses</a></li>
          </ol>
        </nav>
      </section>
      <section id="search" className='mt-27'>
        <div className='container'>
          <div className='flex px-6 gap-x-4 h-16 w-1/2 mx-auto rounded-2xl border-2 border-[var(--clr-accent-900)]'>
            <img className='w-7 aspect-square' src="/icons/searchicon.svg" alt="" />
            <input onChange={(e)=>setSearch(e.target.value)} className='outline-none text-[var(--clr-primary-900)] text-xl placeholder-gray-300 w-full' type="text" name="search" placeholder='Search for a course '  />
          </div>
            <div className='flex gap-x-10 mt-12 justify-center '>
              {!isLoading && categories.map(category=>(
                <button className={clsx(category?.name===selectedCat?'text-[var(--clr-accent-900)]':'text-[var(--clr-primary-200)]')} onClick={()=>handleCategorySelection(category?.name)} key={category?._id}>{category?.name}</button>
              ))}
            </div>
        </div>
      </section>
      <section id="courses" className='mt-24'>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            { !isLoading && filterCourses.map(course =>(
              <CourseCard key={course._id} {...course} />
            ))}
          </div>
        </div>
      </section>
      <section id="pagination" className='mt-24 mb-40'>
        <div aria-label='Pagination'>
          <div className='flex text-2xl justify-center text-[var(--clr-accent-900)] items-center gap-x-10'>
            <button className='text-xl' aria-label='Previous page' disabled={page === 1} onClick={() => setPage((prev) => Math.max(prev - 1, 1))}> Prev </button>

            {pages.map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={p === page ? 'w-12 rounded-sm aspect-square text-white bg-[var(--clr-accent-900)]' : 'w-12 rounded-sm aspect-square text-[var(--clr-accent-900) bg-[var(--clr-accent-200)]'}
              >
                {p}
              </button>
            ))}

            <button className='text-xl' disabled={page === totalPages} onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}>Next</button>
          </div>
        </div>
      </section>
      <Toaster position='bottom-left' />
    </>
  )
}

export default Courses