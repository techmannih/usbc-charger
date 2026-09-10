# CAD check report

Authoritative results for the current exported artifact are in
[`fabrication/validation.json`](fabrication/validation.json) and
[`fabrication/checks/`](fabrication/checks/). Regenerate them after source changes.

The initial assessment for this file-package addition found:

- netlist check: no errors or warnings;
- routed-circuit checks: no findings;
- Gerber-derived shorts check: no detected shorts;
- PCB placement: three suboptimal-orientation suggestions (C6, D5, D6),
  with zero placement DRC errors/warnings; the command exits 1 for the suggestions;
- schematic placement: existing orientation/trace-simplification suggestions;
- build: succeeds with existing courtyard, chip pin-specification and
  schematic-reference diagnostics.

The build's reference-text warnings include built-in symbols whose labels are
drawn by the renderer. Both schematic sheets are exported for visual review.
Warnings are retained in `checks/build.log`, not silently counted as passes.

These findings do not constitute supplier CAM or physical clearance approval.
The export gate requires no routed-artifact errors and a passing copper-shorts
check. The manifest remains `released_for_manufacturing: false` until the
separate design, assembly and hardware release process is completed.
