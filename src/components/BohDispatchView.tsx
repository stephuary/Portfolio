import React, { useState } from 'react';
import { DepartmentTask, NatalChartData, SensorySignature, GuestProfile } from '../types';
import { CheckCircle2, Clock, AlertTriangle, ShieldCheck, Sparkles, Filter, Check, UserCheck } from 'lucide-react';

interface Props {
  tasks: DepartmentTask[];
  chart: NatalChartData;
  sensory: SensorySignature;
  profile: GuestProfile;
  onToggleTask: (taskId: string) => void;
}

export const BohDispatchView: React.FC<Props> = ({
  tasks,
  chart,
  sensory,
  profile,
  onToggleTask
}) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');

  const filteredTasks = selectedDept === 'all'
    ? tasks
    : tasks.filter(t => t.department.toLowerCase() === selectedDept.toLowerCase());

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="space-y-6">
      {/* Top Ops Summary Header */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Operational Dispatch · Boutique Scale Checklist</span>
          </div>
          <h3 className="font-serif text-2xl text-stone-100 font-medium">
            Room Preparation: {profile.name} ({profile.roomNumber})
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Calibrated for <strong>{chart.sunSign.name} ({chart.dominantElement} Element)</strong> · {profile.nights} Nights stay arriving at {profile.arrivalTime}
          </p>
        </div>

        <div className="flex items-center gap-4 bg-stone-950 p-3.5 rounded-xl border border-stone-800">
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Preparation Status</div>
            <div className="text-sm font-semibold text-stone-100 font-mono">
              {completedCount} of {tasks.length} Completed
            </div>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-stone-800 flex items-center justify-center relative bg-stone-900">
            <span className="text-xs font-mono text-amber-400 font-bold">
              {Math.round((completedCount / tasks.length) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* Staff Tone & Psychological Playbook */}
      <div className="bg-stone-900 border-l-4 border-l-amber-400 border border-stone-800 rounded-r-2xl p-5">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1.5">
          <UserCheck className="w-4 h-4" />
          <span>Front Desk & Concierge Interaction Guide</span>
        </div>
        <h4 className="font-serif text-lg text-stone-100 font-medium mb-2">
          Service Notes for {chart.sunSign.hospitalityArchetype}
        </h4>
        <div className="text-xs text-stone-300 leading-relaxed space-y-1.5">
          <p>
            <strong>Guest Interaction Preference:</strong> {profile.preferences.interactionStyle}
          </p>
          <p>
            {chart.dominantElement === 'Fire' ? (
              <span>
                <strong>Service Rule:</strong> Direct, energetic, swift. Keep arrival check-in brief and streamlined. Avoid lengthy explanations in the lobby—they value quick room access and prompt room service.
              </span>
            ) : chart.dominantElement === 'Earth' ? (
              <span>
                <strong>Service Rule:</strong> Calm, attentive, meticulous. Highlight the craftsmanship of room amenities, local organic tea offerings, and ensure bed linens and pillows match their exact selections.
              </span>
            ) : chart.dominantElement === 'Air' ? (
              <span>
                <strong>Service Rule:</strong> Friendly, articulate, informative. Share curated neighborhood tips, gallery exhibits, or coffee spots when prompted, and respect their need for quiet reading space.
              </span>
            ) : (
              <span>
                <strong>Service Rule:</strong> Gentle, quiet, thoughtful. Protect their peace and privacy. Keep voices gentle in hallways and ensure their evening turn-down herbal tea is delivered right on time.
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Filter by Department */}
      <div className="flex items-center justify-between flex-wrap gap-2 pt-2">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {['all', 'Housekeeping', 'Front Desk', 'F&B', 'Wellness', 'Concierge'].map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedDept.toLowerCase() === dept.toLowerCase()
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                  : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-stone-100'
              }`}
            >
              {dept === 'all' ? 'All Departments' : dept}
            </button>
          ))}
        </div>

        <span className="text-xs text-stone-400">
          Showing {filteredTasks.length} department tasks
        </span>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            id={`task-${task.id}`}
            onClick={() => onToggleTask(task.id)}
            className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
              task.completed
                ? 'bg-stone-950/60 border-stone-800/80 opacity-70'
                : 'bg-stone-900 border-stone-800 hover:border-amber-500/40 hover:bg-stone-900/90'
            }`}
          >
            <div className="flex items-start gap-3">
              <button
                className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  task.completed
                    ? 'bg-emerald-500 border-emerald-500 text-stone-950'
                    : 'border-stone-600 hover:border-amber-400'
                }`}
              >
                {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </button>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`font-serif text-base ${task.completed ? 'line-through text-stone-400' : 'text-stone-100'}`}>
                    {task.title}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-950 text-stone-300 border border-stone-800">
                    {task.department}
                  </span>
                  {task.priority === 'High' && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">
                      High Priority
                    </span>
                  )}
                </div>

                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  {task.instruction}
                </p>

                <div className="flex items-center gap-4 text-[11px] text-stone-500 mt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    Target Time: {task.targetTime}
                  </span>
                  <span>·</span>
                  <span className="italic text-stone-400">
                    {task.astrologicalAnchor}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
