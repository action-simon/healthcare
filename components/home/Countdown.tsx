"use client";

import * as m from "@/paraglide/messages";

import { de, enGB, nl } from "date-fns/locale";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  format,
} from "date-fns";
import { useEffect, useMemo, useReducer } from "react";

import Container from "../Container";
import { Skeleton } from "../ui/skeleton";
import { languageTag } from "@/paraglide/runtime.js";

interface TimeUnitProps {
  value: number;
  singularLabel: string;
  pluralLabel: string;
}

interface CountdownState {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLoading: boolean;
  timerReachedZero: boolean;
}

interface CountdownProps {
  targetDate: Date;
}

// Countdown reducer to handle state updates
function countdownReducer(
  state: CountdownState,
  action: Partial<CountdownState>,
) {
  return { ...state, ...action };
}

// useCountdown hook
function useCountdown(targetDate: Date): CountdownState {
  const [state, dispatch] = useReducer(countdownReducer, {
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLoading: true,
    timerReachedZero: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now >= targetDate) {
        clearInterval(interval);
        dispatch({ timerReachedZero: true });
      } else {
        dispatch({
          months: differenceInMonths(targetDate, now),
          days: differenceInDays(targetDate, now) % 30,
          hours: differenceInHours(targetDate, now) % 24,
          minutes: differenceInMinutes(targetDate, now) % 60,
          seconds: differenceInSeconds(targetDate, now) % 60,
          isLoading: false,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return state;
}

// TimeUnit component
const TimeUnit: React.FC<TimeUnitProps> = ({
  value,
  singularLabel,
  pluralLabel,
}) => (
  <div className="mx-1 w-24 rounded-lg bg-muted p-2 font-mono uppercase leading-none text-primary">
    <div>{value.toString().padStart(2, "0")}</div>
    <div className="text-sm">{value === 1 ? singularLabel : pluralLabel}</div>
  </div>
);

const SkeletonLoader: React.FC = () => (
  <Skeleton className="mx-1 h-[90px] w-24 rounded-lg bg-muted p-2" />
);

// Custom hook to get the current locale and format string
function useLocaleAndFormatString() {
  const locales = useMemo(() => ({ en: enGB, de, nl }), []);
  const currentLocale = locales[languageTag()] || enGB;

  const formatStrings = useMemo(
    () => ({
      en: "MMMM d, yyyy 'at' HH:mm aa",
      de: "d. MMMM yyyy 'um' H:mm 'Uhr'",
      nl: "d MMMM yyyy 'om' H:mm 'uur'",
    }),
    [],
  );

  const currentFormatString = formatStrings[languageTag()] || formatStrings.en;

  return { currentLocale, currentFormatString };
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const { months, days, hours, minutes, seconds, isLoading, timerReachedZero } =
    useCountdown(targetDate);

  const { currentLocale, currentFormatString } = useLocaleAndFormatString();

  const formattedDate = format(targetDate, currentFormatString, {
    locale: currentLocale,
  });

  const renderTimeUnit = (
    value: number,
    singularLabel: string,
    pluralLabel: string,
  ) => (
    <TimeUnit
      value={value}
      singularLabel={singularLabel}
      pluralLabel={pluralLabel}
    />
  );

  return (
    <Container className="bg-background py-16 text-center">
      <div className="mb-3 text-3xl font-semibold text-foreground">
        {m.Das_Healthcare_Meetings_Event_findet_statt_in()}{" "}
      </div>
      {isLoading ? (
        <div className="flex w-full items-center justify-center text-center text-6xl">
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <Skeleton className="rounded-lg bg-muted">
            <div className="mx-1 text-2xl font-extralight opacity-0">
              {m.and()}
            </div>
          </Skeleton>
          <SkeletonLoader />
        </div>
      ) : (
        <div>
          {timerReachedZero ? (
            <div className="mb-3 text-3xl font-semibold text-white">
              {m.Das_Healthcare_Meetings_Event_hat_schon_stattgefunden()}
            </div>
          ) : (
            <div className="flex w-full items-center justify-center text-center text-xl lg:text-6xl">
              {renderTimeUnit(months, m.month(), m.months())}
              {renderTimeUnit(days, m.day(), m.days())}
              {renderTimeUnit(hours, m.hour(), m.hours())}
              {renderTimeUnit(minutes, m.minute(), m.minutes())}
              <div className="mx-1 text-sm font-extralight lg:text-2xl">
                {m.and()}
              </div>
              {renderTimeUnit(seconds, m.second(), m.seconds())}
            </div>
          )}
        </div>
      )}
      <p className="mt-3 text-center text-sm font-light">
        {m.date()} <span className="font-semibold">{formattedDate}</span>
      </p>
    </Container>
  );
};

export default Countdown;
