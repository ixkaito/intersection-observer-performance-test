import { NextSeo } from 'next-seo'
import clsx from 'clsx'
import Layout from '../components/Layout'
import { InView } from 'react-intersection-observer'

const Page: React.FC = () => {
  return (
    <Layout>
      <NextSeo title="One Component per Viewport" />
      <div
        className={clsx(
          'grid grow shrink-0 place-content-center place-items-center'
        )}
      >
        <ul className="flex flex-wrap gap-1 justify-center">
          {[...Array(1000)].map((_, i) => {
            return (
              <InView key={i}>
                {({ inView, ref }) => {
                  return (
                    <li
                      ref={ref}
                      className={clsx(
                        'grid basis-full place-items-center h-[50vh] text-center rounded border',
                        inView && 'bg-red-50'
                      )}
                    >
                      {i + 1}
                    </li>
                  )
                }}
              </InView>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Page
