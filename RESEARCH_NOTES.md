# Research and Publication editorial notes

Updated 2026-09-23. Research now presents expertise, interests, and significance across three directions. Publication contains all 27 existing entries, split into 9 preprints and 18 published/accepted papers and sorted by recorded year, then arXiv identifier, descending. Each entry retains its bibliographic metadata, links, tags, contribution sentence, and visual; tags and visuals appear in an expandable research highlight. Old paper bookmarks redirect to Publication. Per the author’s update, “From equations to insights: Unraveling symbolic structures in PDEs with LLMs” is accepted in SIAM Journal on Scientific Computing (SISC) in 2026. It appears among the 2026 Published & Accepted Papers; no DOI has been supplied.

The following records the earlier review and the provenance of the retained highlights (2026-09-13). The page groups all 27 existing entries into Reliable & Scalable Optimization, Optimal Transport & Experimental Design, and Learning & Autonomous Systems, with one placement per paper. The review used the locally available original PDFs: abstracts for all papers, plus introductions, conclusions, and the relevant numerical sections for the featured results. Public arXiv records were also checked. Existing titles, authors, publication details, and resource links are preserved; the ten existing preprints carry a text badge. Accepted papers are not marked as preprints.

## Topic map

Placement follows the primary contribution highlighted on the page. Reliable & Scalable Optimization contains general algorithms, convergence analysis, matrix methods, and parallel or mixed-precision computation. Optimal Transport & Experimental Design brings together solvers and models centered on these two problem families. Learning & Autonomous Systems covers learned algorithm choices, automated modeling, scientific discovery with LLMs, reinforcement learning, and certifiable robotic decisions. A paper appears once, with one or two tags for related methods or applications. Entries are sorted by the bibliographic year already recorded on the site, then arXiv identifier, both descending.

In particular, mp-ripALM, accelerated Jacobi, symmetric matrix factorization, and Burer–Monteiro acceleration belong to the first direction. ripALM remains there as a general framework, with an Optimal Transport tag. STROM and STRIDE belong to the third direction, with Robotics and Semidefinite Optimization tags. Legacy section anchors are retained; the earlier scientific-computing anchor points to Transport & Design, machine-learning points to Learning & Autonomous Systems, and robotics points to the latter as well.

### Reliable & Scalable Optimization

| Paper | Core idea informing its placement |
| --- | --- |
| [Mixed-precision GPU acceleration for MEB](https://arxiv.org/abs/2605.31425) | Low-precision screening followed by high-precision refinement, with full constraint checks, for large minimum enclosing ball problems. |
| [Generalized symmetric matrix factorization](https://arxiv.org/abs/2603.19147) | An alternating optimization framework for generalized symmetric matrix factorization. |
| [D-ripALM](https://arxiv.org/abs/2602.06398) | Relative-error control in decentralized proximal augmented Lagrangian optimization. |
| [Relative-type inexact proximal ALM for convex nonlinear programming](https://arxiv.org/abs/2510.25261) | Extend convergence analysis of implementable relative inexactness to convex nonlinear constraints. |
| [Nesterov’s accelerated Jacobi-type methods](https://arxiv.org/abs/2407.03272) | Parallelizable accelerated iterations for large symmetric positive semidefinite linear systems. |
| [Inexact Halpern iteration](https://arxiv.org/abs/2402.06033) | Inexact fixed-point iterations with applications to distributionally robust optimization. |
| [Squared smoothing Newton for SDP](https://arxiv.org/abs/2303.05825) | Exploit semidefinite structure through smoothing and Newton steps. |
| [ripALM](https://arxiv.org/abs/2411.13267) | A relative-error criterion with one tolerance parameter, avoiding a prescribed summable error sequence and correction steps. |
| [Burer–Monteiro acceleration of nuclear-norm optimization](https://arxiv.org/abs/2204.14067) | Combine efficient factorized low-rank optimization with safeguards for the original convex problem. |
| [QPPAL](https://arxiv.org/abs/2103.13108) | A two-phase proximal augmented Lagrangian approach to high-dimensional convex quadratic programs. |
| [Degenerate doubly nonnegative projection](https://arxiv.org/abs/2009.11272) | Understand degeneracy and design robust solvers for projection onto the doubly nonnegative cone. |
| [Homotopy proximal variable-metric framework](https://arxiv.org/abs/1812.05243) | Homotopy and variable metrics for composite convex minimization, including practical inexact solves. |
| [Inexact ALM for second-order cone programming](https://arxiv.org/abs/2010.08772) | A practical augmented Lagrangian solver exploiting second-order cone structure. |

### Optimal Transport & Experimental Design

| Paper | Core idea informing its placement |
| --- | --- |
| [Practical convergent Gromov–Wasserstein algorithm](https://arxiv.org/abs/2605.04175) | A provably convergent inexact projected-gradient approach to Gromov–Wasserstein transport. |
| [Beyond expected information gain](https://arxiv.org/abs/2604.21849) | Integral probability metrics provide geometry-aware Bayesian design utilities and plug-and-play extensions. |
| [PINS](https://arxiv.org/abs/2502.03749) | Combine Sinkhorn and sparse Newton steps within entropic proximal iterations. |
| [NewVEM](https://arxiv.org/abs/2407.03294) | Newton vertex exchange for constrained self-concordant minimization, with experimental design applications. |
| [PNOD](https://arxiv.org/abs/2409.18392) | Projected Newton methods for exact optimal experimental design. |
| [Sparse smoothing Newton for discrete OT](https://arxiv.org/abs/2311.06448) | Exploit sparsity to compute accurate solutions to discrete optimal transport. |
| [Corrected inexact proximal ALM for group-quadratic OT](https://arxiv.org/abs/2311.01976) | Relative-error proximal ALM for transport with group-quadratic regularization. |
| [Implementable inexact entropic proximal point algorithm](https://arxiv.org/abs/2011.14312) | Practical inexact entropic proximal solves for linear programs, including capacity-constrained multi-marginal transport. |

### Learning & Autonomous Systems

| Paper | Core idea informing its placement |
| --- | --- |
| [OptimAI](https://arxiv.org/abs/2504.16918) | Collaborating LLM agents formulate, code, debug, and solve optimization problems expressed in natural language. |
| [Learning penalty parameters](https://arxiv.org/abs/2409.17320) | Learn penalty choices to accelerate multi-block constrained optimization. |
| [Fast and certifiable trajectory optimization / STROM](https://arxiv.org/abs/2406.05846) | Sparse semidefinite relaxations and GPU computation provide trajectories with optimality certificates. |
| [Symbolic structures in PDEs with LLMs](https://arxiv.org/abs/2503.09986) | Use LLMs to identify interpretable symbolic structure in differential equations. |
| [Stochastic proximal gradient for expected reward](https://arxiv.org/abs/2401.12508) | Stochastic and variance-reduced proximal-gradient algorithms for regularized reward optimization. |
| [Inexact projected gradient for SDP / STRIDE](https://arxiv.org/abs/2105.14033) | Combine projected-gradient steps and safeguarded low-rank local search for large SDP relaxations, including robotics applications. |

## Per-paper visual provenance

Each of the 27 papers now has its own core-contribution sentence and visual: eight original-paper figure crops, one chart plotted from paper data, six HTML tables, and twelve SVG illustrations. No paper is duplicated. The three introductions describe the current research directions, and the overview does not display paper counts. Original titles, authors, citations, links, and preprint labels remain intact.

SVGs are schematics, examples, or an analytical illustration; their types and sources are recorded below rather than shown as labels beneath the visuals. They do not depict measured benchmarks. The Huber plot evaluates the exact scalar function in Eq. (12) of arXiv:2303.05825 at epsilon 0.25 and 0.75. The GW toy spaces are rigid transforms with identical pairwise distances. The sparse OT matrix is a schematic pattern only. Theory tables summarize guarantees under their respective assumptions.

| Paper | Visual | Source / interpretation |
| --- | --- | --- |
| [2605.31425](https://arxiv.org/abs/2605.31425) | `images/research/meb-baseline-comparison.png` | Paper result. Runtime comparison at d = 50 for 1,000–100,000 balls. ripALM and mp-ripALM use the NVIDIA RTX 4070 GPU; CGAL, SCS, and CLARABEL use the Intel Core i7-13700K CPU. The original logarithmic axes, curves, and legend are unmodified. [Fig. 2(d), left](https://arxiv.org/abs/2605.31425) |
| [2603.19147](https://arxiv.org/abs/2603.19147) | HTML table: Two exactness results | Theory summary. Both statements require the conditions established in the paper. [Paper](https://arxiv.org/abs/2603.19147) |
| [2602.06398](https://arxiv.org/abs/2602.06398) | `images/research/decentralized-ripalm.svg` | Method schematic. A simplified view of the inner/outer switching rule and neighbor communication. [Paper](https://arxiv.org/abs/2602.06398) |
| [2510.25261](https://arxiv.org/abs/2510.25261) | HTML table: Convergence at three levels | Theory summary. Each guarantee is subject to its stated assumptions; local rate results require additional conditions. [Paper](https://arxiv.org/abs/2510.25261) |
| [2407.03272](https://arxiv.org/abs/2407.03272) | `images/research/accelerated-jacobi.svg` | Method schematic. The rate is for the associated convex quadratic objective, under the method’s assumptions. [Paper](https://arxiv.org/abs/2407.03272) |
| [2402.06033](https://arxiv.org/abs/2402.06033) | `images/research/halpern-dro.png` | Paper result. Empirical samples (blue) move toward worst-case perturbations (orange) in the nonlinear DRO example. [Fig. 2(b)](https://arxiv.org/abs/2402.06033) |
| [2303.05825](https://arxiv.org/abs/2303.05825) | `images/research/huber-smoothing.svg` | Analytical illustration. Drawn from the scalar formula in Eq. (12); applied spectrally to smooth the PSD projection. [Eq. (12)](https://arxiv.org/abs/2303.05825) |
| [2411.13267](https://arxiv.org/abs/2411.13267) | HTML table: Practical relative-error control | Method summary. “One parameter” refers to the inner error criterion, not all algorithm settings. [Paper](https://arxiv.org/abs/2411.13267) |
| [2204.14067](https://arxiv.org/abs/2204.14067) | `images/research/bm-global.svg` | Method schematic. The schematic separates the fast factorized phase from the global-convergence safeguard. [Paper](https://arxiv.org/abs/2204.14067) |
| [2103.13108](https://arxiv.org/abs/2103.13108) | `images/research/qppal-phases.svg` | Method schematic. Phase I targets low-to-medium accuracy; Phase II efficiently refines the warm start. [Paper](https://arxiv.org/abs/2103.13108) |
| [2009.11272](https://arxiv.org/abs/2009.11272) | HTML table: Handling degenerate DNN projection | Method summary. The DNN cone combines positive semidefiniteness with entrywise nonnegativity. [Paper](https://arxiv.org/abs/2009.11272) |
| [1812.05243](https://arxiv.org/abs/1812.05243) | `images/research/homotopy-primal-dual.svg` | Method schematic. In the covariance-estimation specialization, the method avoids matrix inversion and Cholesky factorization. [Paper](https://arxiv.org/abs/1812.05243) |
| [2010.08772](https://arxiv.org/abs/2010.08772) | `images/research/socp-geometry.svg` | Theory schematic. The convergence implication holds under the regularity conditions established in the paper. [Paper](https://arxiv.org/abs/2010.08772) |
| [2605.04175](https://arxiv.org/abs/2605.04175) | `images/research/gromov-wasserstein.svg` | Illustrative example. Toy spaces illustrate matching within-space geometry; the algorithm uses verifiable inexact projections. [Paper](https://arxiv.org/abs/2605.04175) |
| [2604.21849](https://arxiv.org/abs/2604.21849) | `images/research/boed-utility.png` | Paper result. Preference-learning example: design regions above 80% of each utility’s own peak. [Fig. 4, top](https://arxiv.org/abs/2604.21849) |
| [2502.03749](https://arxiv.org/abs/2502.03749) | HTML table: Matched-accuracy wall time (seconds) | Paper result. Same EPPA outer iteration count and matched final accuracy. Selected rows from the paper; N is its MNIST augmentation setting. [Table 2](https://arxiv.org/pdf/2502.03749#page=7) |
| [2407.03294](https://arxiv.org/abs/2407.03294) | `images/research/newvem-d-optimal.png` | Measured results replotted with Matplotlib from Table 8 (TTime columns), local PDF page 23. D-optimal design with the quadratic/trigonometric design space χ3(n), p = 4; both methods use λₖ ≤ 10⁻³. [Paper](https://arxiv.org/abs/2407.03294) |
| [2409.18392](https://arxiv.org/abs/2409.18392) | `images/research/pnod-tree.svg` | Method schematic. The schematic highlights the continuous relaxations that dominate node evaluation. [Paper](https://arxiv.org/abs/2409.18392) |
| [2311.06448](https://arxiv.org/abs/2311.06448) | `images/research/sparse-transport.svg` | Method schematic. The matrix shows an illustrative sparsity pattern, not a measured transport plan. [Paper](https://arxiv.org/abs/2311.06448) |
| [2311.01976](https://arxiv.org/abs/2311.01976) | `images/research/cipalm-transport.png` | Paper result. Left: λ₁ = λ₂ = 0. Right: λ₁ = λ₂ = 1. Regularization changes the structure of the transport plan. [Fig. 2, solution panels](https://arxiv.org/abs/2311.01976) |
| [2011.14312](https://arxiv.org/abs/2011.14312) | `images/research/ieppa-gurobi-comparison.png` | Original runtime comparison for 3-marginal capacity-constrained optimal transport, n1 = n2 = n3 = n, n = 50 × id (50–500). The adjacent accuracy table reports iEPPA primal feasibility residuals near 10⁻⁶ and Gurobi residuals near 10⁻¹³–10⁻¹². This is a comparison at different achieved accuracies, not a matched-accuracy benchmark. Gurobi 9.5.1 uses the barrier method with presolve and crossover disabled; iEPPA uses a KKT stopping threshold of 10⁻⁵. Both run on the same CPU workstation. [Fig. 2, right; Sections 4 and 4.2](https://arxiv.org/abs/2011.14312) |
| [2504.16918](https://arxiv.org/abs/2504.16918) | `images/research/optimai-agents.svg` | Method schematic. Simplified architecture based on Fig. 1: structured roles and iterative debugging turn descriptions into executable solutions. [Fig. 1](https://arxiv.org/abs/2504.16918) |
| [2409.17320](https://arxiv.org/abs/2409.17320) | `images/research/learned-penalties.png` | Paper result. Lasso example, m = 10 and n = 20: log-normalized MSE versus iterations. LMPALM uses learned penalties. [Fig. 1, first panel](https://arxiv.org/abs/2409.17320) |
| [2406.05846](https://arxiv.org/abs/2406.05846) | `images/research/strom-trajectories.png` | Paper result. Car back-in trajectories. Across the paper’s five benchmarks, certified suboptimality is below 1%. [Fig. 5, bottom](https://arxiv.org/abs/2406.05846) |
| [2503.09986](https://arxiv.org/abs/2503.09986) | `images/research/symbolic-pde.svg` | Method schematic. A simplified view of operator prediction guiding symbolic solution construction. [Paper](https://arxiv.org/abs/2503.09986) |
| [2401.12508](https://arxiv.org/abs/2401.12508) | HTML table: Samples to reach ε-stationarity | Theory summary. Bounds hold under the respective assumptions; the improved rate uses additional conditions. [Paper](https://arxiv.org/abs/2401.12508) |
| [2105.14033](https://arxiv.org/abs/2105.14033) | `images/research/stride-overview.png` | Paper illustration. The paper’s univariate example explains how rounding, local search, lifting, and SDP descent work together. [Fig. 1](https://link.springer.com/article/10.1007/s10107-022-01912-6) |

### NewVEM D-optimal design chart

`newvem-d-optimal.png` plots all five rows of Table 8 in `liang2025newvem.pdf` (page 23). Values below are total runtime (TTime) in seconds, not QP subproblem time. The horizontal axis is the number of candidate design points; the vertical axis is linear and starts at zero. Lines connect the reported measurements without smoothing. Both methods share the stopping threshold λₖ ≤ 10⁻³; their final λₖ values are not identical.

| n | FWPN (s) | NewVEM (s) |
| --- | --- | --- |
| 10,000 | 54.45 | 7.81 |
| 20,000 | 54.83 | 27.12 |
| 30,000 | 206.33 | 59.05 |
| 40,000 | 171.37 | 101.86 |
| 50,000 | 240.29 | 156.19 |

### Original PDF crops

The following are direct Poppler renders from the locally supplied original PDFs. Coordinates are pixels at the stated DPI. The curves, axes, and values are unmodified; multi-panel selections are identified in the captions.

| Asset | Local PDF / page | DPI | Crop x, y, width, height |
| --- | --- | --- | --- |
| meb-baseline-comparison.png | liang2026mixed.pdf / 15 | 280 | 390, 1908, 744, 474 |
| halpern-dro.png | liang2025inexact.pdf / 23 | 220 | 760, 558, 490, 480 |
| boed-utility.png | wu2026beyond.pdf / 17 | 220 | 340, 505, 1210, 454 |
| cipalm-transport.png | yang2024corrected.pdf / 25 | 220 | 718, 376, 916, 370 |
| ieppa-gurobi-comparison.png | chu2023efficient.pdf / 19 | 300 | 1340, 1472, 812, 622 |
| learned-penalties.png | liang2024accelerating.pdf / 9 | 440 | 680, 1528, 548, 408 |
| strom-trajectories.png | kang2026fast.pdf / 16 | 220 | 395, 592, 1100, 250 |
| stride-overview.png | yang2023inexact.pdf / 7 | 220 | 150, 158, 1044, 426 |

PINS timings are transcribed from Table 2: synthetic n=400 (PINS 1.455 s, Sinkhorn+EPPA 47.68 s), MNIST N=2 (1.66 s, 24.66 s), and MNIST N=4 (51.74 s, 3793.2 s). The methods use the same EPPA outer iteration count and matched final accuracy. These are existing reported measurements, not new website benchmarks. The stochastic proximal-gradient table reports theoretical sample complexity; the variance-reduced rate uses additional assumptions.

## Maintenance

Research and Publication are static HTML with page-specific stylesheets, `assets/css/research.css` and `assets/css/publication.css`. Keep Research focused on expertise, interests, and significance; add papers to Publication. Native `details` elements keep the full bibliography easy to scan while preserving contribution summaries and visuals without JavaScript. Keep internal links explicit (`index.html`) and paper IDs stable.

Add each new paper once to Preprints or Published & Accepted Papers, in descending bibliographic year and then arXiv identifier order. Retain appropriately sourced visuals and plain explanatory captions; record provenance here. When a paper is accepted or published, move it to Published & Accepted Papers, update its citation, and remove the Preprint badge. Do not infer publication dates from arXiv submission dates.

`assets/js/legacy-links.js` forwards old homepage sections. `assets/js/research-links.js` forwards old Research paper, preprint, and publication anchors. Research topic anchors remain on Research. All current navigation and publication details work with JavaScript disabled.
