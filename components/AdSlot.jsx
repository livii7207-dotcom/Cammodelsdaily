import { useEffect, useRef } from 'react';

/**
 * Renders an ad unit from TrafficJunky or ExoClick.
 *
 * Priority: TrafficJunky if tjZoneId is set, ExoClick if exoZoneId is set.
 * Both can be used on the same page (different slots).
 *
 * TrafficJunky setup:
 *   1. Register at https://www.trafficjunky.com
 *   2. Create ad zones (get zone IDs)
 *   3. Set NEXT_PUBLIC_TJ_PUBLISHER_ID and pass tjZoneId as prop
 *
 * ExoClick setup:
 *   1. Register at https://www.exoclick.com
 *   2. Create zones, choose "Banner" format
 *   3. Set NEXT_PUBLIC_USE_EXOCLICK=true and pass exoZoneId as prop
 */
export default function AdSlot({ tjZoneId, exoZoneId, height = 90, className = '' }) {
  const ref = useRef(null);
  const tjPublisherId = process.env.NEXT_PUBLIC_TJ_PUBLISHER_ID;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '';

    if (tjZoneId && tjPublisherId) {
      const containerId = `tj_${tjZoneId}`;
      const div = document.createElement('div');
      div.id = containerId;
      el.appendChild(div);

      const cfg = document.createElement('script');
      cfg.type = 'text/javascript';
      cfg.text = `tjads=window.tjads||[];tjads.push({zoneid:${tjZoneId},container:'${containerId}'});`;
      el.appendChild(cfg);
    } else if (exoZoneId) {
      const ins = document.createElement('ins');
      ins.className = 'eas6a97888e';
      ins.setAttribute('data-zoneid', String(exoZoneId));
      el.appendChild(ins);

      const invoke = document.createElement('script');
      invoke.async = true;
      invoke.setAttribute('data-cfasync', 'false');
      invoke.src = 'https://a.magsrv.com/invoke.js';
      el.appendChild(invoke);
    }
  }, [tjZoneId, exoZoneId, tjPublisherId]);

  const isConfigured = (tjZoneId && tjPublisherId) || exoZoneId;

  if (!isConfigured) {
    return (
      <div
        className={`bg-gray-800 border border-dashed border-gray-600 rounded-xl flex items-center justify-center text-gray-500 text-xs ${className}`}
        style={{ minHeight: height }}
      >
        Ad slot — add zone IDs to env vars to activate
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`flex justify-center ${className}`}
      style={{ minHeight: height }}
    />
  );
}
